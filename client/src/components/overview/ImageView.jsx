import React, {useState, useEffect} from 'react';
import Carousel from './Carousel.jsx';
import MainImage from './MainImage.jsx';

var ImageView = ({currentProductImage, setCurrentProductImage, productPhotos, thumbnailImages, zoomIn}) => {

  return (
    <div id="image-view" role="product-photos">
      <MainImage currentProductImage={currentProductImage} zoomIn={zoomIn} />
      <Carousel thumbnailImages={thumbnailImages} currentProductImage={currentProductImage} setCurrentProductImage={setCurrentProductImage}/>
    </div>
  )
};

export default ImageView;