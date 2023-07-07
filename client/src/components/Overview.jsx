import React, { useState, useEffect } from 'react';
import ImageView from './overview/ImageView.jsx';
import ExpandedImageView from './overview/ExpandedImageView.jsx';
import ProductInformation from './overview/ProductInformation.jsx';
import PlaceholderImage from '../assets/image-not-available.png';

const Overview = ({currentProduct, currentProductStyles}) => {
  var [currentProductImage, setCurrentProductImage] = useState(PlaceholderImage);
  var [thumbnailImages, setThumbnailImages] = useState([...Array(14).keys()]);
  var [zoomIn, setZoomIn] = useState(false);
  var [currentStyle, setCurrentStyle] = useState(null);
  var [productPhotos, setProductPhotos] = useState(null);

  useEffect(() => {
    if (currentProductStyles !==  null){
      setCurrentStyle(currentProductStyles.results[0]);
    }
  }, [currentProductStyles]);

  useEffect(() => {
    // console.log(currentStyle);
    if(currentStyle !== null)  {
      var thumbnailURLs = currentStyle.photos.map((photo, index) => {
        return photo;
      });
      var fullResURLs = currentStyle.photos.map((photo, index) => {
        return photo.url;
      });
      setThumbnailImages(thumbnailURLs);
      setProductPhotos(fullResURLs);
      setCurrentProductImage(currentStyle.photos[0].url);
    }
  }, [currentStyle]);

  return (
    <div id='overview' role='product-information'>
      <ImageView currentProductImage={currentProductImage} setCurrentProductImage={setCurrentProductImage} productPhotos={productPhotos} thumbnailImages={thumbnailImages} zoomIn={() => {setZoomIn(!zoomIn);}}/>
      {(zoomIn) ? (<ExpandedImageView currentProductImage={currentProductImage} thumbnailImages={thumbnailImages} close={() => {setZoomIn(false)}}/>) : (<></>) }
      <ProductInformation currentProduct={currentProduct} currentProductStyles={currentProductStyles} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle}/>
    </ div>
  )
}
export default Overview;