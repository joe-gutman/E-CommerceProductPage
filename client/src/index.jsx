import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Overview from './components/Overview.jsx';
import RatingsAndReviews from './components/RatingsAndReviews.jsx';
import QuestionsAndAnswers from './components/QuestionsAndAnswers.jsx';
import RelatedItems from './components/RelatedItems.jsx';

const axios = require('axios');

const App = () => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});
  const [productStyles, setProductStyles] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  var endpoints = [
    `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS}/products/${currentProduct.id}/styles`,
    `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS}/products/${currentProduct.id}/related`,];

  var axiosHeaders = {headers:{"Authorization" : process.env.AUTH_SECRET}};

  useEffect(() => {
    // call for all products to get initial product ID for later calls
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS}/products/`, axiosHeaders)
    .then ((response) => {
      setProducts(response.data);
      setCurrentProduct(response.data[0]);
      return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS}/products/${response.data[0].id}/styles`, axiosHeaders);
    })
    .then((response) => {
      setProductStyles(response.data.results);
      return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS}/products/${response.data.product_id}/related`, axiosHeaders);
    })
    .then ((response) => {
      setRelatedProducts(response.data);
    })
    .catch ((error) => {
      throw error;
    });
  }, []);

  console.log(currentProduct);
  console.log(productStyles);
  console.log(relatedProducts);

  return (
    <div>
      <Overview />
      <RatingsAndReviews />
      <QuestionsAndAnswers />
      <RelatedItems />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);