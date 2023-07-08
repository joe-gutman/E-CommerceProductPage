import React, { useState, useEffect} from 'react';
import { useSpring, animated } from '@react-spring/web';
import UpArrow from '../../assets/icons8-arrow-up-black.png';
import DownArrow from '../../assets/icons8-arrow-down-black.png';
import PlaceholderImage from '../../assets/image-not-available.png'
import Checkmark from '../../assets/icons8-checkmark.png'

var Carousel = ({currentProductImage, setCurrentProductImage, thumbnailImages}) => {
  var [carouselHeight, setCarouselHeight] = useState(null);
  var [thumbnailImageHeight, setThumbnailImageHeight] = useState(null);
  var [thumbnailContainerHeight, setThumbnailContainerHeight] = useState(null);
  var [thumbnailViewCount, setThumbnailViewCount] = useState(4);
  var [thumbnailContainerPosition, setThumbnailContainerPosition] = useState(0);
  var [carouselPositionLimit, setCarouselPositionLimit] = useState(0);
  const [springs, api] = useSpring(() => ({
    from: {y:0}
  }));

  useEffect(() => {
    //using parent container's, 'image-view', height to dynamically set the carousel and thumnail image height.
    setThumbnailImageHeight(document.getElementById('image-view').offsetHeight/thumbnailViewCount);
    setThumbnailContainerHeight((document.getElementById('image-view').offsetHeight/thumbnailViewCount)*thumbnailImages.length);
    setCarouselHeight(document.getElementById('image-view').offsetHeight);
    setCarouselPositionLimit(((document.getElementById('image-view').offsetHeight/thumbnailViewCount)*thumbnailImages.length) - document.getElementById('image-view').offsetHeight);

  }, []);

  var slideThumbnails = (event) => {
    var oldPosition = thumbnailContainerPosition;
    var newPosition;

    if (event.target.id.includes('next')) {
      newPosition = thumbnailContainerPosition + carouselHeight;

      if (thumbnailContainerPosition < carouselPositionLimit) {
        api.start({
          from: {
            y: -oldPosition,
          },
          to: {
            y: -newPosition,
          },
        })
        setThumbnailContainerPosition(newPosition);
      }

    } else if (event.target.id.includes('prev')) {
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
        setThumbnailContainerPosition(newPosition);
      }
    }
  };

  return (
    <div id="image-view-carousel" role='select-product-photos'>
      <div id="overflow-container">
        {thumbnailContainerPosition > 0 ? (
        <div className='image-view-carousel-controls' id='prev-thumbnails' onClick={slideThumbnails} style={{backgroundImage:`url(${UpArrow})`}}>
        </div>
        ) : (<></>)
        }
        <animated.div id="image-view-thumbnails-container" style={{...springs}}>
            {thumbnailImages.map((image, index) => (
              <div className="thumbnail-image" id={`carousel-thumbnail-${index}`} onClick={() => setCurrentProductImage(image.url)} style={{height: `${thumbnailImageHeight}px`, backgroundImage: `url(${image.thumbnail_url})`}} key={index} >

                {/* <div className='thumbnail-checkmark' id={`thumbnail-checkmark-${index}`} style={{backgroundImage: `url(${Checkmark})`}} key={index}> </div> */}
              </div>
            ))}
        </animated.div>
        { (thumbnailImages.length <= thumbnailViewCount || thumbnailContainerPosition > carouselPositionLimit) ? (
          <></>
          ) : (
            <div className='image-view-carousel-controls' id='next-thumbnails' onClick={slideThumbnails} style={{backgroundImage:`url(${DownArrow})`}}>
            </div>
          )
        }
      </div>
    </div>
  );
};


export default Carousel;

