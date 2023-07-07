import React from 'react';
import StarDisplay from '../shared-components/StarDisplay.jsx';
import ActionButtonOutfit from './ActionButtonOutfit.jsx';
const OutfitCard = ({index, product, id, name, category, price, avgRating,image, handleRemove, handleProductCardClick}) => {

  var width = 300;

  return (
    <>
      <div className = "card" role = {"show-details-of-outfit-products"} style = {{width:`${width.toString()}px`}}>
      <ActionButtonOutfit handleRemove = {handleRemove} id = {id} /> <br></br>
          <img src={image} width="300" height="375" alt="product image" className = "product-image" onClick = { () => {handleProductCardClick(id)}} /> <br></br>
          <div className = 'card-details' role ="User-can-select-product" onClick = { () => {handleProductCardClick(id)}} >
            <small className = 'card-text'>{category} </small>
            <span className = 'card-text'> {name} </span>
            <small className = 'card-text'> ${price} </small>
            <StarDisplay className = 'card-text' name = {name} id = {id} rating={avgRating} size={50}/>
            <small className = 'card-text'>{avgRating} *</small>
          </div>
      </div>
    </>
  )
}


export default OutfitCard;