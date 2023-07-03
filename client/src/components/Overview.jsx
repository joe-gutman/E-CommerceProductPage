import React, { useState, useEffect } from 'react';
import ImageView from './overview/ImageView.jsx';
import ExpandedImageView from './overview/ExpandedImageView.jsx'

const Overview = () => {
  var [currentProductImage, setCurrentProductImage] = useState(null);
  var [thumbnailImages, setThumbnailImages] = useState([...Array(14).keys()]);
  var [zoomIn, setZoomIn] = useState(false);

  useEffect(() => {
    console.log(zoomIn)
  }, [zoomIn])

  return (
    <div id='overview' role='product-information'>
      <h1>Overview</h1>
      <ImageView currentProductImage={currentProductImage} setCurrentProductImage={setCurrentProductImage} thumbnailImages={thumbnailImages} zoomIn={() => {setZoomIn(!zoomIn);}}/>
      {(zoomIn) ? (<ExpandedImageView currentProductImage={currentProductImage} thumbnailImages={thumbnailImages} close={() => {setZoomIn(false)}}/>) : (<></>) }
    </ div>
  )
}

export default Overview;