import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import StarDisplay from './shared-components/StarDisplay.jsx';

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
      }
    ]
  };

  return (<>
    <h3>Ratings And Reviews</h3>
    <div>
      <h4>Review Breakdown</h4>
      <div><StarDisplay name='sDisplay1' rating={3.6} size={40}/></div>
      <div>review breakdown goes here</div>
      <div>% recommendations goes here</div>
    </div>
    <div>
      <h4>Reviews</h4>
    </div>
    <div>
      <h4>Product Factors</h4>
    </div>
  </>);
}

export default RatingsAndReviews;