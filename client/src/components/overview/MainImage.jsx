import React, { useState } from 'react';
import PlaceholderImage from '../../assets/image-not-available.png';

var MainImage = ({currentProductImage, zoomIn}) => {
  return (
    <div id="image-view-main-image" role="view-selected-product-photo" style={{backgroundImage: `url(${currentProductImage})`}} onClick={() => zoomIn()}>
    </div>
  );
};


export default MainImage;

