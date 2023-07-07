import React, {useState, useEffect} from 'react';
import Carousel from './Carousel.jsx';
import MainImage from './MainImage.jsx';

var ImageView = ({currentProductImage, setCurrentProductImage, productPhotos, thumbnailImages, zoomIn}) => {

  return (
    <div id="image-view" role="product-photos">
      <Carousel thumbnailImages={thumbnailImages} currentProductImage={currentProductImage} setCurrentProductImage={setCurrentProductImage}/>
      <MainImage currentProductImage={currentProductImage} zoomIn={zoomIn} />
    </div>
  )
};

export default ImageView;