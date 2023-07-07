import React, { useState, useEffect } from 'react';
import PlacholderImage from '../../assets/image-not-available.png';

var SelectStyle = ({currentProductStyles, currentStyle, setCurrentStyle}) => {

  return (
    <div id="styles">
      {currentProductStyles.results ? currentProductStyles.results.map((style, index) => (
        <button
          className="style-button"
          key={index}
          onClick={() => {setCurrentStyle(style)}}
          style={{
            backgroundImage: `url(${!style.photos[0].thumbnail_url ? PlacholderImage : style.photos[0].thumbnail_url})`
          }}
        ></button>
      )) : null}
    </div>
  )
}

export default SelectStyle;