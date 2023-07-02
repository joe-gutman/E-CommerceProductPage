import React, { useState, useEffect} from 'react';
import { useSpring, animated } from '@react-spring/web';
import UpArrow from '../../assets/icons8-arrow-up-black.png';
import DownArrow from '../../assets/icons8-arrow-down-black.png';

console.log('UpArrow', UpArrow)
var Carousel = () => {
  var [thumbnailImages, setThumbnailImages] = useState([...Array(5).keys()]);
  var [carouselHeight, setCarouselHeight] = useState(null);
  var [thumbnailImageHeight, setThumbnailImageHeight] = useState(null);
  var [thumbnailContainerHeight, setThumbnailContainerHeight] = useState(null);
  var [thumbnailViewCount, setThumbnailViewCount] = useState(4);
  const [springs, api] = useSpring(() => ({
    from: {y:0}
  }));

  useEffect(() => {
    // get thumbnail image height by dividing the image viewer height by the amount of thumbnails shown.
    setThumbnailImageHeight(document.getElementById('image-view').offsetHeight/thumbnailViewCount);
    setThumbnailContainerHeight((document.getElementById('image-view').offsetHeight/thumbnailViewCount)*thumbnailImages.length);
    setCarouselHeight(document.getElementById('image-view').offsetHeight);
  }, []);

  var thumbnailContainerPosition = 0;
  var slideThumbnails = (event) => {
    var carouselPositionLimit = 0;
    var oldPosition = thumbnailContainerPosition;
    var newPosition;

    if (event.target.id.includes('next')) {
      carouselPositionLimit = thumbnailContainerHeight - carouselHeight;
      newPosition = thumbnailContainerPosition + carouselHeight;
      console.log(thumbnailContainerHeight);

      if (thumbnailContainerPosition < carouselPositionLimit) {
        api.start({
          from: {
            y: -oldPosition,
          },
          to: {
            y: -newPosition,
          },
        })
        thumbnailContainerPosition = newPosition;
      }

    } else if (event.target.id.includes('prev')) {
      carouselPositionLimit = 0;
      newPosition = thumbnailContainerPosition - carouselHeight;

      if (thumbnailContainerPosition > 0) {
        api.start({
          from: {
            y: -oldPosition,
          },
          to: {
            y: -newPosition,
          },
        })
        thumbnailContainerPosition = newPosition;
      }
    }
  };

  return (
    <div id="image-view-carousel">
      <div className='image-view-carousel-controls' id='prev-thumbnails' onClick={slideThumbnails} style={{backgroundImage:`url(${UpArrow})`}}>
      </div>
      <animated.div id="image-view-thumbnails-container" style={{...springs}}>
          {thumbnailImages.map((imageId) => (
            <div className="thumbnail-image" imageid={imageId} style={{height: `${thumbnailImageHeight}px`}}>
              <img className="placeholder-thumbnail-image" src="https://digitalfinger.id/wp-content/uploads/2019/12/no-image-available-icon-6.png"></img>
            </div>
          ))}
      </animated.div>
      <div className='image-view-carousel-controls' id='next-thumbnails' onClick={slideThumbnails} style={{backgroundImage:`url(${DownArrow})`}}>
      </div>
    </div>
  );
};


export default Carousel;

