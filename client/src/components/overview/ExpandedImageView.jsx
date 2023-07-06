import React, {render, useState} from 'react';
import ReactDOM from 'react-dom';
import PlaceholderImage from '../../assets/image-not-available.png';
import CloseButton from '../../assets/icons8-close-button.png'

var ExpandedImageView = ({currentProductImage, thumbnailImages, close}) => {
  var image = PlaceholderImage;

  var closeExpandedView = (e) => {
    if (["expanded-view-focus", "close-expanded-view-button"].includes(e.target.id)) {
      close();
    }
  }

  return ReactDOM.createPortal(
    <div id="expanded-view-focus" role="zoom-current-product-photo" onClick={closeExpandedView}>
      <div id="expanded-product-image-container">
        <div id="expanded-product-image" style={{backgroundImage: `url(${image})`}} ></div>
        <div id="close-expanded-view-button" onClick={closeExpandedView} style={{backgroundImage: `url(${CloseButton})`}}></div>
      </div>
    </div>,
    document.body
  );
}

export default ExpandedImageView;