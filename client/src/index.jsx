import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Overview from './components/Overview.jsx';
import RatingsAndReviews from './components/RatingsAndReviews.jsx';
import QuestionsAndAnswers from './components/QuestionsAndAnswers.jsx';
import RelatedItems from './components/RelatedItems.jsx';

const axios = require('axios');

const getAvgRating = function (ratings) {
  let count = 0;
  let result = 0;
  for (let f = 1; f <= 5; f++) {
    let rating = Number(ratings[f])
    count += rating;
    result += rating * f;
  }
  if (count > 0) {
    result /= count;
    result = (Math.round(result * 100) / 100);
  }
  return result;
}

const App = () => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});
  const [currentProductStyles, setCurrentProductStyles] = useState({}); // product styles of current product
  const [currentRelatedProducts, setCurrentRelatedProducts] = useState([]); // related products of current product
  const [currentProductAvgRating, setCurrentAvgRating] = useState(0); // average rating of current product


  useEffect(() => {
    var axiosHeaders = {headers:{"Authorization" : process.env.AUTH_SECRET}};
    console.log(`https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS}/products/`)
    //get all products to get initial product ID for current product
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS}/products/`, axiosHeaders)
    .then ((response) => {
      setProducts(response.data);
      setCurrentProduct(response.data[1]);

      var endpoints = [
        `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS}/products/${response.data[0].id}/styles`,
        `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS}/reviews/meta?product_id=${response.data[0].id}`,
        `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS}/products/${response.data[0].id}/related`,
      ];

      return axios.all(endpoints.map((endpoint) => axios.get(endpoint, axiosHeaders)));
    })
    .then(axios.spread(({data: styles}, {data: reviews}, {data: related}) => {
      setCurrentProductStyles(styles);
      setCurrentRelatedProducts(related);
      setCurrentAvgRating(getAvgRating(reviews.ratings));
    }))
    .catch ((error) => {
      throw error;
    });
  }, []);


  if(currentRelatedProducts.length === 0) {
   return (
   <div> Is loading... </div>
   )
  } else {
    return (
      <div>
      <Overview />
      <RatingsAndReviews />
      <QuestionsAndAnswers product_id={currentProduct.id}/>
      <RelatedItems currentRelatedProducts = {currentRelatedProducts} getAvgRating = {getAvgRating}
      currentProduct = {currentProduct} />
      </div>
    );
  }
}

window.addEventListener("DOMContentLoaded", function (e) {
  // const domNode = document.getElementById('root');
  // const root = createRoot(domNode);
  // root.render(<App />);
  createRoot(document.getElementById('root')).render(<App />);
});


export default getAvgRating;

