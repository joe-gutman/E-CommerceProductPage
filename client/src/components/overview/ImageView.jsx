import React, {useState, useEffect} from 'react';
import Carousel from './Carousel.jsx';
import MainImage from './MainImage.jsx';

var ImageView = ({currentProductImage, setCurrentProductImage, productPhotos, thumbnailImages, zoomIn}) => {

  useEffect(() => {
    console.log('image view:', thumbnailImages);
  }, [thumbnailImages]);


  return (
    <div id="image-view" role="product-photos">
      <Carousel thumbnailImages={thumbnailImages} currentProductImage={currentProductImage} setCurrentProductImage={setCurrentProductImage}/>
      <MainImage currentProductImage={currentProductImage} zoomIn={zoomIn} />
    </div>
  )
};

export default ImageView;