import React, { useState, useEffect } from 'react';
import RelatedProductsList from './related-items/RelatedProductsList.jsx';
import YourOutfitList from './related-items/YourOutfitList.jsx';

const RelatedItems = ({currentRelatedProducts, getAvgRating, currentProduct, currentProductStyles, currentProductAvgRating, handleProductCardClick }) => {


  return (
    <div role = "should-show-related-products-and-outfit-list">

    <hr></hr>
    <div className = "sub-titles"> <h2> RELATED PRODUCTS </h2> </div>
    <RelatedProductsList  currentRelatedProducts = {currentRelatedProducts} getAvgRating = {getAvgRating} currentProduct = {currentProduct} handleProductCardClick={handleProductCardClick}  />
    <br></br>
    <hr></hr>
    <div className = "sub-titles"><h2> MY OUTFITS </h2> </div>
    <YourOutfitList getAvgRating = {getAvgRating} currentProduct = {currentProduct} currentProductStyles = {currentProductStyles} currentProductAvgRating = {currentProductAvgRating} handleProductCardClick={handleProductCardClick}  />

    </div>
  )

}

export default RelatedItems;