import React, { useState, useEffect} from 'react';
import { useSpring, animated } from '@react-spring/web';
import UpArrow from '../../assets/icons8-arrow-up-black.png';
import DownArrow from '../../assets/icons8-arrow-down-black.png';
import PlaceholderImage from '../../assets/image-not-available.png'
import Checkmark from '../../assets/icons8-checkmark.png'

var Carousel = ({currentProductImage, setCurrentProductImage, thumbnailImages}) => {
  var [thumbnailImages, setThumbnailImages] = useState([...Array(14).keys()]);
  var [carouselHeight, setCarouselHeight] = useState(null);
  var [thumbnailImageHeight, setThumbnailImageHeight] = useState(null);
  var [thumbnailContainerHeight, setThumbnailContainerHeight] = useState(null);
  var [thumbnailViewCount, setThumbnailViewCount] = useState(4);
  var [thumbnailContainerPosition, setThumbnailContainerPosition] = useState(0);
  var [carouselPositionLimit, setCarouselPositionLimit] = useState(0);
  var [previousSelectedImage, setPreviousSelectedImage] = useState(0);
  var [currentSelectedImage, setCurrentSelectedImage] = useState(0);
  const [springs, api] = useSpring(() => ({
    from: {y:0}
  }));

  useEffect(() => {
    //using parent container's, 'image-view', height to dynamically set the carousel and thumnail image height.
    setThumbnailImageHeight(document.getElementById('image-view').offsetHeight/thumbnailViewCount);
    setThumbnailContainerHeight((document.getElementById('image-view').offsetHeight/thumbnailViewCount)*thumbnailImages.length);
    setCarouselHeight(document.getElementById('image-view').offsetHeight);
    setCarouselPositionLimit(((document.getElementById('image-view').offsetHeight/thumbnailViewCount)*thumbnailImages.length) - document.getElementById('image-view').offsetHeight);

    document.getElementById(`thumbnail-checkmark-${currentSelectedImage}`).style.display = 'block';
  }, []);

  useEffect(() => {
    document.getElementById(`thumbnail-checkmark-${previousSelectedImage}`).style.display = 'none';
    setPreviousSelectedImage(currentSelectedImage);
    document.getElementById(`thumbnail-checkmark-${currentSelectedImage}`).style.display = 'block';

  }, [currentSelectedImage]);

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
      {thumbnailContainerPosition > 0 ? (
      <div className='image-view-carousel-controls' id='prev-thumbnails' onClick={slideThumbnails} style={{backgroundImage:`url(${UpArrow})`}}>
      </div>
      ) : (<></>)
      }
      <animated.div id="image-view-thumbnails-container" style={{...springs}}>
          {thumbnailImages.map((id) => (
            <div className="thumbnail-image" id={`carousel-thumbnail-${id}`} onClick={() => {
              if(currentSelectedImage != id) {
                setCurrentSelectedImage(id)}}} style={{height: `${thumbnailImageHeight}px`, backgroundImage: `url(${PlaceholderImage})`}} key={id} >

              <div className='thumbnail-checkmark' id={`thumbnail-checkmark-${id}`} style={{backgroundImage: `url(${Checkmark})`}} key={id}> </div>
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
  );
};


export default Carousel;

