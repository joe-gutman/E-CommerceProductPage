import React, { useState, useEffect } from 'react';
import RelatedCard from './RelatedCard.jsx';

const axios = require('axios');


const RelatedProductsList = ({currentRelatedProducts, getAvgRating}) => {

  const [relatedProducts, setRelatedProducts] = useState([]);

  const [movementIncrement, setMovementIncrement] = useState(0);
  const [cardContainerWidth, setCardContainerWidth] = useState(0);


  useEffect ( () => {
    var axiosHeaders = {headers:{"Authorization" : process.env.AUTH_SECRET}};

    var endpoints = [];

    currentRelatedProducts.map((relatedId) => {
      console.log('relatedId', relatedId)
      endpoints.push(`https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS}/products/${relatedId}`,`https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS}/products/${relatedId}/styles`, `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS}/reviews/meta?product_id=${relatedId}`);
    });

    console.log('endpt',endpoints);
    axios.all(endpoints.map((endpoint) => axios.get(endpoint, axiosHeaders)))
    .then((results) => {
      console.log(results);
      var relatedItemData = {};
      for (var i = 2; i < results.length; i+=3) {
       relatedItemData[results[i].data.product_id]= ({...results[i-1].data, ...results[i-2].data, avgRating: getAvgRating(results[i].data.ratings)})
      }
      setRelatedProducts(Object.values(relatedItemData));
    })

    var boxWidth = document.getElementsByClassName("box")[0].offsetWidth;
    var cardMargin = getComputedStyle(document.getElementsByClassName("card")[0]).marginLeft + getComputedStyle(document.getElementsByClassName("card")[0]).marginRight;
    var cardWidth = cardMargin + document.getElementsByClassName("card")[0].offsetWidth;
    setMovementIncrement((boxWidth) - (boxWidth%cardWidth));
    setCardContainerWidth(cardWidth*productCount.length);

  }, [])

  console.log('related', relatedProducts);
  var productCount = [...Array(16).keys()];

  return (
    <>
    <div className = "wrapper" >
    <div className="box">
      <div className = "arrow" id= "left-arrow"> ⬅️ </div>

      <div className = "inner-box">

    {/* {relatedProducts.map((product, index) => (
      <RelatedCard key = {index} product = {product} id = {product.id} name = {product.name} category = {product.category} price = {product.default_price} avgRating = {product.avgRating} features = {product.features} image = {product.results[0].photos[0].url || "https://digitalfinger.id/wp-content/uploads/2019/12/no-image-available-icon-6.png"} />

    ))} */}

   {productCount.map(() => (
      <RelatedCard />
    ))}
      </div>
      <div className = "arrow" id= "right-arrow"> ➡️ </div>
    </div>
    </div>
    </>
  )
}




export default RelatedProductsList;