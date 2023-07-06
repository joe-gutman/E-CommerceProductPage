import React, {useState, useEffect} from 'react';
import ActionButtonRelated from './ActionButtonRelated.jsx'
const axios = require('axios');
import StarDisplay from '../shared-components/StarDisplay.jsx';

const RelatedCard = ({index, product, id, name, category, price, avgRating, features, image, currentProduct, handleProductCardClick, currentProductFeatures, setCurrentProductFeatures }) => {

  // const [currentProductFeatures, setCurrentProductFeatures] = useState([]);

  // useEffect (() => {
  //   const currentId = currentProduct.id
  //   var axiosHeaders = {headers:{"Authorization" : process.env.AUTH_SECRET}};
  //   axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS}/products/${currentId}`, axiosHeaders)
  //   .then((results) => {
  //     setCurrentProductFeatures(results.data.features);
  //   })
  //   }, [])

  var width = 300;

  return (
    <>
      <div className = "card" role='show-details-of-related-product' style = {{width:`${width.toString()}px`}} >
        <ActionButtonRelated name = {name} features = {features} currentProduct = {currentProduct} currentProductFeatures = {currentProductFeatures} /> <br></br>
          <img src={image} width="300" height="375" alt="product image" className = "product-image" onClick = {() => { handleProductCardClick(id)}}/> <br></br>
          <div className = 'card-details' onClick = {() => { handleProductCardClick(id)}}>
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

export default RelatedCard;