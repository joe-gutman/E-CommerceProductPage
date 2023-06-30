import React, { useState } from 'react';
import RelatedProductsList from './related-items/RelatedProductsList.jsx';
import YourOutfitList from './related-items/YourOutfitList.jsx';

const RelatedItems = ({currentRelatedProducts, getAvgRating, currentProduct, currentProductStyles, currentProductAvgRating}) => {


  return (

    <>
    <hr></hr>
    <div> <h3> Related Products </h3> </div>
    <RelatedProductsList currentRelatedProducts = {currentRelatedProducts} getAvgRating = {getAvgRating} />

    <hr></hr>
    <div><h3>Your Outfit </h3> </div>
    <YourOutfitList getAvgRating = {getAvgRating} currentProduct = {currentProduct} currentProductStyles = {currentProductStyles} currentProductAvgRating = {currentProductAvgRating} />

    </>


  )


}

export default RelatedItems;