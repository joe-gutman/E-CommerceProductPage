import React from 'react';
import ActionButtonOutfit from './ActionButtonOutfit.jsx'

const OutfitCard = ({index, product, id, name, category, price, avgRating,image, handleRemove, handleProductCardClick}) => {

  var width = 300;

  return (
    <>
      <div className = "card" onClick = { () => {handleProductCardClick(id)}} style = {{width:`${width.toString()}px`}}>
        <ActionButtonOutfit handleRemove = {handleRemove} id = {id} /> <br></br>
          <img src={image} width="300" height="375" alt="product image"/> <br></br>
          <div className = 'card-details'>
            <small className = 'card-text'>{category} </small>
            <span className = 'card-text'> {name} </span>
            <small className = 'card-text'> ${price} </small>
            <small className = 'card-text'>{avgRating} *</small>
          </div>
      </div>
    </>
  )
}


export default OutfitCard;