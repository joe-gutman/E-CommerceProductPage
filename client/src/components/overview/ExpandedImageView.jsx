import React, {render, useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import PlaceholderImage from '../../assets/image-not-available.png';
import CloseButton from '../../assets/icons8-close-button.png'

var Magnifier = () => {
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 })
  const onMouseMove = (e) => {
      setCursorPosition({ top: e.screenY, left: e.screenX });
  }

  console.log(cursorPosition);
  return (
    <div onMouseMove={onMouseMove} >
      <div id="magnifier" style={{position: 'absolute', ...cursorPosition }} />
    </div>
  )
}

var ExpandedImageView = ({currentProductImage, thumbnailImages, close}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [expandedImageSize, setExpandedImageSize] = useState({ height: 200, width: 200});
  const [magnifierPos, setMagnifierPos] = useState({ top: 0, left: 0});
  const [magnifierSize, setMagnifierSize] = useState({ height: 200, width: 200});
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 })
  var image = PlaceholderImage;

  useEffect(() => {
    //get base expanded image size for zoomed image size reference
    var imageHeight = document.getElementById('expanded-image').offsetHeight;
    var imageWidth = document.getElementById('expanded-image').offsetWidth;
    setExpandedImageSize({ height: imageHeight, width: imageWidth});
    console.log(`[ ${imageHeight}, ${imageWidth}]`);
  }, [magnifierPos])

  useEffect(() => {

  }, [isClicked])


  var closeExpandedView = (e) => {
    if (["expanded-view-focus", "close-expanded-view-button"].includes(e.target.id)) {
      setIsZoomed(false);
      close();
    }
  }

  var handleMouseClick = (e) => {
    console.log(isClicked);
    if(!isClicked) {
      // getElementById(e.target.id).
      setIsZoomed(true);
      setIsClicked(true);
    } else {
      setIsZoomed(false);
      setIsClicked(false);
    }
  };

  var handleMouseMove = (e) => {
    //get magnifier size
    var magnifier = document.getElementById('magnifier');
    var rect = document.getElementById('expanded-image').getBoundingClientRect();
    var offsetTop = rect.top;
    var offsetLeft = rect.left;
    setMagnifierPos({ top: e.clientY, left: e.clientX});

    if ((e.clientY < rect.top ) ||
        (e.clientX < rect.left) ||
        (e.clientY > rect.bottom) ||
        (e.clientX > rect.right)) {
    }
  }

  var placeholderURL = "https://images.unsplash.com/photo-1686119249382-c1157a607aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80";
  return ReactDOM.createPortal(
    <div id="expanded-view-focus" role="zoom-current-product-photo" onClick={closeExpandedView}>
      <div id="expanded-image-container">
        <div id="expanded-image" style={{backgroundImage: `url(${placeholderURL})`}}
        onClick={handleMouseClick}
        onMouseEnter={() => { if(isClicked) {setIsZoomed(true)}}}
        onMouseLeave={() => { if(isZoomed) {setIsZoomed(false)}}}
        onMouseMove={(e) => { if(isZoomed) {handleMouseMove(e)}}}>
          {/* <><div id="magnifier" style={{
            height: `${magnifierSize.height}px`,
            width: `${magnifierSize.width}px`,
            position: 'absolute',
            ...magnifierPos, }}/>
          <div id='zoomed-image' style={{
            height: `${expandedImageSize.height}px`,
            width: `${expandedImageSize.width}px`,
            backgroundImage: `url(${placeholderURL})`,
            backgroundPosition: `-${magnifierPos.left}px -${magnifierPos.top}px`}}>
              </div></> */}
          {(isZoomed) ? ( <div id='zoomed-image' style={{
            height: `${expandedImageSize.height}px`,
            width: `${expandedImageSize.width}px`,
            backgroundImage: `url(${placeholderURL})`,
            backgroundPosition: `-${magnifierPos.left}px -${magnifierPos.top}px`}}>
              </div>
            ):(<></>)}
        </div>
        <div id="close-expanded-view-button" onClick={closeExpandedView} style={{backgroundImage: `url(${CloseButton})`}}></div>
      </div>
    </div>,
    document.body
  );
}

export default ExpandedImageView;