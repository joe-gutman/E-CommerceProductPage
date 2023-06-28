import React, { useState, useEffect } from 'react';
import RelatedCard from './RelatedCard.jsx';

const axios = require('axios');


const RelatedProductsList = ({currentRelatedProducts, getAvgRating}) => {

  const [relatedProducts, setRelatedProducts] = useState({});

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
      setRelatedProducts(relatedItemData);

    })
  }, [])

  console.log('related', relatedProducts)
  return (
    <>
    <div className="box">

      <section>
      <RelatedCard />
      </section>

      <RelatedCard />
      <RelatedCard />

    </div>
    </>
  )
}




export default RelatedProductsList;