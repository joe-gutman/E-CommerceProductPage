import React, {render, useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import PlaceholderImage from '../../assets/image-not-available.png';
import CloseButton from '../../assets/icons8-close-button.png'

var Magnifier = () => {
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 })
  const onMouseMove = (e) => {
      setCursorPosition({ top: e.screenY, left: e.screenX });
  }

  return (
    <div onMouseMove={onMouseMove} >
      <div id="magnifier" style={{position: 'absolute', ...cursorPosition }} />
    </div>
  )
}

var ExpandedImageView = ({currentProductImage, productPhotos, close}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [expandedImageSize, setExpandedImageSize] = useState({ height: 200, width: 200});
  const [magnifierPos, setMagnifierPos] = useState({ top: 0, left: 0});
  const [zoomedImagePos, setzoomedImagePos] = useState({ top: 0, left: 0});
  const [magnifierSize, setMagnifierSize] = useState({ height: 200, width: 200});
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 })
  var image = PlaceholderImage;

  useEffect(() => {
    //get base expanded image size for zoomed image size reference
    var imageHeight = document.getElementById('expanded-image').offsetHeight;
    var imageWidth = document.getElementById('expanded-image').offsetWidth;
    setExpandedImageSize({ height: imageHeight, width: imageWidth});
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
    var image = document.getElementById('zoomed-image');
    var container = document.getElementById('expanded-image');
    var magnifier = document.getElementById('magnifier');
    var mousePosX = e.clientX;
    var mousePosY = e.clientY;
    var containerPos = container.getBoundingClientRect();

    var imagePosX = -(((mousePosX - containerPos.left) * .5) * 2);
    var imagePosY = -(((mousePosY - containerPos.top) * .5) * 2);
    setMagnifierPos({ top: e.clientY, left: e.clientX});
    setzoomedImagePos({top: imagePosY , left: imagePosX});

    if ((e.clientY < containerPos.top ) ||
        (e.clientX < containerPos.left) ||
        (e.clientY > containerPos.bottom) ||
        (e.clientX > containerPos.right)) {
        setIsZoomed(false);
    }
  }

  var placeholderURL = "https://images.unsplash.com/photo-1686119249382-c1157a607aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80";
  return ReactDOM.createPortal(
    <div id="expanded-view-focus" role='zoom-current-product-photo' onClick={closeExpandedView} >
      <div id="expanded-image-container">
        <div id="expanded-image" style={{backgroundImage: `url(${currentProductImage})`}}
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
          {(isZoomed) ? ( <img id='zoomed-image' src={`${currentProductImage}`} style={{
            height: `${(expandedImageSize.height * 2)}px`,
            width: `${(expandedImageSize.width * 2)}px`,
            top: `${zoomedImagePos.top}px`,
            left:`${zoomedImagePos.left}px` }}/>
            ):(<></>)}
        </div>
        <div id="close-expanded-view-button" onClick={closeExpandedView} style={{backgroundImage: `url(${CloseButton})`}}></div>
      </div>
    </div>,
    document.body
  );
}

export default ExpandedImageView;