import React, { useState } from 'react';
import RelatedProductsList from './related-items/RelatedProductsList.jsx';
import YourOutfitList from './related-items/YourOutfitList.jsx';

const RelatedItems = ({currentRelatedProducts, getAvgRating}) => {


  return (

    <>
    <hr></hr>
    <div>Related Products </div>
    <br></br>
    <RelatedProductsList currentRelatedProducts = {currentRelatedProducts} getAvgRating = {getAvgRating} />

    <hr></hr>
    <div>Your Outfit </div>
    <br></br>
    <YourOutfitList />

    </>


  )


}

export default RelatedItems;