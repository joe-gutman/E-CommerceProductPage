import React from 'react';
import FacebookIcon from '../../assets/icons8-facebook-icon.png';
import TwitterIcon from '../../assets/icons8-twitter-icon.png';
import PinterestIcon from '../../assets/icons8-pinterest-icon.png';


var ShareButtons = () => {

  var shareOnSocialMedia = (e) => {
    if (e.target.id === 'facebook-share') {
      console.log('facebook share');
    } else if (e.target.id === 'twitter-share') {
      console.log('twitter share');
    } else if (e.target.id === 'pinterest-share') {
      console.log('pinterest share');
    }
  }

  return (
    <>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}>
        <img className="share-button" id="facebook-share" src={FacebookIcon}/>
      </a>
      <a href={`https://twitter.com/intent/tweet?text=${window.location.href}`}>
        <img className="share-button" id="twitter-share" src={TwitterIcon}/>
      </a>
      <a href={`https://pinterest.com/pin/create/button/?url=${window.location.href}`}>
        <img className="share-button" id="pinterest-share" src={PinterestIcon}/>
      </a>
    </>
  )
}

export default ShareButtons;

