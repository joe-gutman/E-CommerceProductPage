import React, {useState, useEffect} from 'react';
import ActionButtonRelated from './ActionButtonRelated.jsx'
const axios = require('axios');
import StarDisplay from '../shared-components/StarDisplay.jsx';

const RelatedCard = ({index, product, id, name, category, price, avgRating, features, image, currentProduct, handleProductCardClick, currentProductFeatures, setCurrentProductFeatures, setScrollPosition}) => {
  const isSalePrice = product.results[0].sale_price !== null;

  var width = 300;

  return (
    <>
      <div className = "card" role = {`show-details-of-related-product-${index}`} style = {{width:`${width.toString()}px`}} >
        <ActionButtonRelated index = {index} name = {name} features = {features} currentProduct = {currentProduct} currentProductFeatures = {currentProductFeatures} /> <br></br>
          {/* <img src={image} width="300" height="375" alt="product image" className = "product-image" onClick = {() => { handleProductCardClick(id)}}/> <br></br> */}
          <div style = {{backgroundImage: `url(${image})`}} alt="product image" className = "product-image" onClick = {() => { setScrollPosition(0); handleProductCardClick(id)}}> </div> <br></br>
          <div className = 'card-details' onClick = {() => { handleProductCardClick(id)}}>
            <small className = 'card-text'>{category} </small>
            <span className = 'card-text'> {name} </span>

            {isSalePrice ? (
              <>
              <small className = {`card-text original-price-strike`}> ${price} </small>
              <small className = {`card-text sale-price-red-text`}> ${product.results[0].sale_price} </small>
              </>
            ) : (
              <>

              <small className = "card-text default-price" > ${price} </small>
              </>
            )}

            <StarDisplay className = 'card-text'  name = {`card-stars-${id}`} id = {id} rating={avgRating} size={40} backgroundColor = {'rgb(244,244,244)'} />
            {/* <small className = 'card-text'>{avgRating} *</small> */}
          </div>
      </div>
    </>
  )
}

export default RelatedCard;