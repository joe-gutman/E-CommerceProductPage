import React, { useState, useEffect} from 'react';
import { useSpring, animated } from '@react-spring/web';
import LeftArrow from '../../assets/icons8-arrow-left-black.png';
import RightArrow from '../../assets/icons8-arrow-right-black.png';
import PlaceholderImage from '../../assets/image-not-available.png'
import Checkmark from '../../assets/icons8-checkmark.png'

var Carousel = ({currentProductImage, setCurrentProductImage, thumbnailImages}) => {
  var [carouselWidth, setcarouselWidth] = useState(null);
  var [thumbnailImageWidth, setThumbnailImageWidth] = useState(null);
  var [thumbnailContainerWidth, setThumbnailContainerWidth] = useState(null);
  var [thumbnailViewCount, setThumbnailViewCount] = useState(4);
  var [thumbnailContainerPosition, setThumbnailContainerPosition] = useState(0);
  var [carouselPositionLimit, setCarouselPositionLimit] = useState(0);
  const [springs, api] = useSpring(() => ({
    from: {y:0}
  }));

  useEffect(() => {
    //using parent container's, 'image-view', Width to dynamically set the carousel and thumnail image Width.
    setThumbnailImageWidth(document.getElementById('thumbnail-image-view').offsetWidth/thumbnailViewCount);
    setThumbnailContainerWidth((document.getElementById('thumbnail-image-view').offsetWidth/thumbnailViewCount)*thumbnailImages.length);
    setcarouselWidth(document.getElementById('thumbnail-image-view').offsetWidth);
    setCarouselPositionLimit(((document.getElementById('thumbnail-image-view').offsetWidth/thumbnailViewCount)*thumbnailImages.length) - document.getElementById('thumbnail-image-view').offsetWidth);

  }, []);

  var slideThumbnails = (event) => {
    var oldPosition = thumbnailContainerPosition;
    var newPosition;

    if (event.target.id.includes('next')) {
      newPosition = thumbnailContainerPosition + carouselWidth;

      if (thumbnailContainerPosition < carouselPositionLimit) {
        api.start({
          from: {
            x: -oldPosition,
          },
          to: {
            x: -newPosition,
          },
        })
        setThumbnailContainerPosition(newPosition);
      }

    } else if (event.target.id.includes('prev')) {
      newPosition = thumbnailContainerPosition - carouselWidth;

      if (thumbnailContainerPosition > 0) {
        api.start({
          from: {
            x: -oldPosition,
          },
          to: {
            x: -newPosition,
          },
        })
        setThumbnailContainerPosition(newPosition);
      }
    }
  };

  return (
    <div id="image-view-carousel" role='select-product-photos'>
      {thumbnailContainerPosition > 0 ? (
      <div className='image-view-carousel-controls' id='prev-thumbnails' onClick={slideThumbnails} style={{backgroundImage:`url(${LeftArrow})`}}>
      </div>
      ) : (<div className='image-view-carousel-controls' id='prev-thumbnails' onClick={slideThumbnails}>
      </div>)
      }
      <div id="thumbnail-image-view">
        <animated.div id="thumbnails-container" style={{width: `${thumbnailContainerWidth}` ,...springs}}>
            {thumbnailImages.map((image, index) => (
              <div className="thumbnail-image" id={`carousel-thumbnail-${index}`} onClick={() => setCurrentProductImage(image.url)} style={{Width: `${thumbnailImageWidth}px`, backgroundImage: `url(${image.thumbnail_url})`}} key={index} >

                {/* <div className='thumbnail-checkmark' id={`thumbnail-checkmark-${index}`} style={{backgroundImage: `url(${Checkmark})`}} key={index}> </div> */}
              </div>
            ))}
        </animated.div>
      </div>
      { (thumbnailImages.length <= thumbnailViewCount || thumbnailContainerPosition > carouselPositionLimit) ? (
        <></>
        ) : (
          <div className='image-view-carousel-controls' id='next-thumbnails' onClick={slideThumbnails} style={{backgroundImage:`url(${RightArrow})`}}>
          </div>
        )
      }
    </div>
  );
};


export default Carousel;

