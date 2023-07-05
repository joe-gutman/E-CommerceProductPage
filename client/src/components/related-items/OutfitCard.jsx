import React from 'react';
import ActionButtonOutfit from './ActionButtonOutfit.jsx'
import StarDisplay from '../shared-components/StarDisplay.jsx';

const OutfitCard = ({index, product, id, name, category, price, avgRating,image, handleRemove, handleProductCardClick}) => {

  var width = 300;

  return (
    <>
      <div className = "card" style = {{width:`${width.toString()}px`}}>
        <ActionButtonOutfit handleRemove = {handleRemove} id = {id} /> <br></br>
          <img src={image} width="300" height="375" alt="product image" className = "product-image" onClick = { () => {handleProductCardClick(id)}} /> <br></br>
          <div className = 'card-details' onClick = { () => {handleProductCardClick(id)}} >
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