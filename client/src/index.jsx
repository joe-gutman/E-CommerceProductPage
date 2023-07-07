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
    let rating = Number(ratings[f]) || 0;
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
      setCurrentProduct(response.data[0]);

      // recommened reviews + not recommended reviews (1 request to reviews API)
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

  const handleProductCardClick = (productId) => {
    var axiosHeaders = { headers: { "Authorization": process.env.AUTH_SECRET } };

    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS}/products/?count=50`, axiosHeaders)
      .then((response) => {

        const selectedProduct = response.data.find((product) => product.id === productId);
        setCurrentProduct(selectedProduct);
          var styleEndpoint = `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS}/products/${productId}/styles`;
          var reviewsEndpoint = `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS}/reviews/meta?product_id=${productId}`;
          var relatedEndpoint = `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS}/products/${productId}/related`;

          return axios.all([
            axios.get(styleEndpoint, axiosHeaders),
            axios.get(reviewsEndpoint, axiosHeaders),
            axios.get(relatedEndpoint, axiosHeaders)
          ]);
      })
      .then((responses) => {
        const stylesResponse = responses[0];
        const reviewsResponse = responses[1];
        const relatedResponse = responses[2];

        const styles = stylesResponse.data;
        const reviews = reviewsResponse.data;
        const related = relatedResponse.data;

        setCurrentProductStyles(styles);
        setCurrentRelatedProducts(related);
        setCurrentAvgRating(getAvgRating(reviews.ratings));
      })
      .catch((error) => {
        console.error('Error:', error);
        throw error;
      });
  };

  ////UNCOMMENT WHEN TESTING
  // return (
  //   <div role = "product-page">
  //   <Overview />
  //   <RatingsAndReviews />
  //   <QuestionsAndAnswers currentProduct={currentProduct}/>
  //   <RelatedItems currentRelatedProducts = {currentRelatedProducts} getAvgRating = {getAvgRating}
  //   currentProduct = {currentProduct} currentProductStyles = {currentProductStyles} currentProductAvgRating = {currentProductAvgRating} handleProductCardClick={handleProductCardClick}  />
  //   </div>
  // );

  /////COMMENT WHEN TESTING **
  if(currentRelatedProducts.length === 0) {
    return (
      <div id="loading-text"> LOADING... </div>
    )
  } else {
   return (
     <div role = "product-page">
      <Overview currentProduct={currentProduct} currentProductStyles={currentProductStyles}/>
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>
      <br></br>
      <RatingsAndReviews />
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>
      <br></br>
      <QuestionsAndAnswers currentProduct={currentProduct} getAvgRating={getAvgRating}/>
      <RelatedItems currentRelatedProducts = {currentRelatedProducts} getAvgRating = {getAvgRating}
      currentProduct = {currentProduct} currentProductStyles = {currentProductStyles} currentProductAvgRating = {currentProductAvgRating} handleProductCardClick={handleProductCardClick}  />
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


export default App;
export {getAvgRating, Overview, RatingsAndReviews, RelatedItems, QuestionsAndAnswers};
