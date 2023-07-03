import React, {useState, useEffect} from 'react';
import ActionButtonRelated from './ActionButtonRelated.jsx'
const axios = require('axios');

const RelatedCard = ({index, product, id, name, category, price, avgRating, features, image, currentProduct, handleProductCardClick }) => {

  const [currentProductFeatures, setCurrentProductFeatures] = useState([]);

  useEffect (() => {
    const currentId = currentProduct.id
    var axiosHeaders = {headers:{"Authorization" : process.env.AUTH_SECRET}};
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS}/products/${currentId}`, axiosHeaders)
    .then((results) => {
      setCurrentProductFeatures(results.data.features);
    })
    }, [])

  var width = 300;

  return (
    <>
      <div className = "card" onClick = {() => { handleProductCardClick(id)}} style = {{width:`${width.toString()}px`}} >
        <ActionButtonRelated name = {name} features = {features} currentProduct = {currentProduct} currentProductFeatures = {currentProductFeatures} /> <br></br>
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

export default RelatedCard;