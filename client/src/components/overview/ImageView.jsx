import React, {useState, useEffect} from 'react';
import Carousel from './Carousel.jsx';
import MainImage from './MainImage.jsx';

var imageView = () => {
  var [currentImage, setCurrentImage] = useState(null);

  return (
    <div id="image-view">
      <Carousel setCurrentImage={setCurrentImage}/>
      <MainImage/>
    </div>
  )
};


export default imageView;