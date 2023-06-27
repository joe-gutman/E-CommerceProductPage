import React from 'react';
import ActionButtonRelated from './ActionButtonRelated.jsx'


const RelatedCard = () => {


  return (
    <>
    <aside>
        <ActionButtonRelated /> <br></br>
        <img
          src="https://pixy.org/src/118/1182186.jpg"
          width="175"
          height="175"
          alt="header image"
        /> <br></br>
         <small>Category</small> <br></br>
        <span> Product Name </span> <br></br>
        <small> $Price</small> <br></br>
        <small>Star Rating</small> <br></br>
    </aside>
      </>
  )


}




export default RelatedCard;