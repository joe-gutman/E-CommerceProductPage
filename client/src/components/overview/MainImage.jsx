import React from 'react';
import PlaceholderImage from '../../assets/image-not-available.png';

var MainImage = ({currentProductImage, zoomIn}) => {
  var image = PlaceholderImage;
  console.log('image', image);

  console.log(zoomIn);

  return (
    <div id="image-view-main-image" role="view-selected-product-photo">
      <img src={image} id="main-product-image" role='current-product-photo' onClick={() => zoomIn()}/>
    </div>
  );
};


export default MainImage;

