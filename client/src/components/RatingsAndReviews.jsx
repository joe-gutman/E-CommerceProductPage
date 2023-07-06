import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import StarDisplay from './shared-components/StarDisplay.jsx';
import ReviewList from './ratings-and-reviews/ReviewList.jsx';
import ProductFactors from './ratings-and-reviews/ProductFactors.jsx';
import ReviewBreakdown from './ratings-and-reviews/ReviewBreakdown.jsx';
import {getAvgRating} from '../index.jsx';

const axios = require('axios');

const RatingsAndReviews = () => {
  let reviewsFake = {
    product: 0,
    page: 1,
    count: 2,
    results: [
      {
        review_id: 0,
        rating: 5,
        summary: 'Review Title',
        recommend: true,
        response: 'Response to the review',
        body: 'Body of the review',
        date: '2023-06-28',
        reviewer_name: 'Reviewer',
        helpfulness: 0,
        photos: [
          {
            id: 0,
            url: 'image url here'
          }
        ]
      },
      {
        review_id: 1,
        rating: 4,
        summary: 'Review Title',
        recommend: true,
        response: 'Response to the review',
        body: 'Body of the review',
        date: '2023-06-28',
        reviewer_name: 'Reviewer',
        helpfulness: 0,
        photos: [
          {
            id: 0,
            url: 'image url here'
          }
        ]
      },
      {
        review_id: 2,
        rating: 4,
        summary: 'Review Title',
        recommend: false,
        response: 'Response to the review',
        body: 'Body of the review',
        date: '2023-06-28',
        reviewer_name: 'Reviewer',
        helpfulness: 0,
        photos: [
          {
            id: 0,
            url: 'image url here'
          }
        ]
      }
    ]
  };
  let reviewMetaFake = {
    product_id: 0,
    ratings: {1: 0, 2: 0, 3: 0, 4: 0, 5: 0},
    recommended: {0: 0, 1: 0},
    characteristics: {
      Size: {id: 14, value: '0.00000'},
      Width: {id: 15, value: '0.00000'},
      Comfort: {id: 16, value: '0.00000'},
      Quality: {id: 17, value: '0.00000'},
      Length: {id: 18, value: '0.00000'}
    }
  }
  for (let f = 0; f < reviewsFake.results.length; f++) {
    reviewMetaFake.ratings[reviewsFake.results[f].rating]++;
    reviewMetaFake.recommended[reviewsFake.results[f].recommend ? 1 : 0]++;
  }
  for (let f = 1; f <= 5; f++) {
    reviewMetaFake.ratings[f] += '';
  }
  //console.log(reviewMetaFake.ratings);

  return (<>
    <h3>Ratings And Reviews</h3>
    <div>
      <ReviewBreakdown avg={3} ratings={reviewMetaFake.ratings} rec={reviewMetaFake.recommended}/>
    </div>
    <div>
      <ReviewList reviews={reviewsFake}/>
    </div>
    <div>
      <ProductFactors factors={reviewMetaFake.characteristics}/>
    </div>
  </>);
}

export default RatingsAndReviews;