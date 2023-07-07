import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import StarDisplay from './shared-components/StarDisplay.jsx';
import ReviewList from './ratings-and-reviews/ReviewList.jsx';
import ProductFactors from './ratings-and-reviews/ProductFactors.jsx';
import ReviewBreakdown from './ratings-and-reviews/ReviewBreakdown.jsx';
import ReviewModal from './ratings-and-reviews/ReviewModal.jsx';
import { getAvgRating } from '../index.jsx';

const axios = require('axios');

const RatingsAndReviews = () => {
  // The following data is FAKE and intended to be structurally similar to what you'd receive from a GET request
  let reviewsFake = { // You'd get something like this from making a GET request to "/reviews/"
    product: 1,
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
        summary: 'Review Title 2: Electric Reviewgaloo',
        recommend: true,
        response: 'That name is truly terrible',
        body: 'Body of this second, different review',
        date: '2023-06-28',
        reviewer_name: 'Really Funny Reviewer',
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
        summary: 'The Third Review Hits Different',
        recommend: true,
        response: 'It really do tho',
        body: 'It hits different',
        date: '2023-06-28',
        reviewer_name: '3viewer',
        helpfulness: 0,
        photos: [
          {
            id: 0,
            url: 'image url here'
          }
        ]
      },
      {
        review_id: 3,
        rating: 1,
        summary: 'Angry Review Title',
        recommend: false,
        response: 'ok',
        body: 'This product is garbage I feel very strongly about this!!!',
        date: '2023-07-07',
        reviewer_name: 'Angreviewer',
        helpfulness: 0,
        photos: [
          {
            id: 0,
            url: 'image url here'
          }
        ]
      },
      {
        review_id: 4,
        rating: 5,
        summary: '.',
        recommend: true,
        response: 'There is no review here',
        body: '.',
        date: '2055-05-05',
        reviewer_name: 'no one',
        helpfulness: 5,
        photos: [
          {
            id: 0,
            url: 'image url here'
          }
        ]
      },
      {
        review_id: 5,
        rating: 4,
        summary: 'Neat product',
        recommend: true,
        response: 'wdym',
        body: 'No idea what\'s wrong with those other reviewers though',
        date: '2023-07-07',
        reviewer_name: 'Reasonable Reviewer',
        helpfulness: 0,
        photos: [
          {
            id: 0,
            url: 'image url here'
          }
        ]
      },
    ]
  };
  let reviewMetaFake = { // You'd get something like this from making a GET request to "/reviews/meta"
    product_id: 1,
    ratings: {1: 0, 2: 0, 3: 0, 4: 0, 5: 0},
    recommended: {0: 0, 1: 0},
    characteristics: {
      Size: {id: 14, value: '3.00000'},
      Width: {id: 15, value: '3.00000'},
      Comfort: {id: 16, value: '3.00000'},
      Quality: {id: 17, value: '3.00000'},
      Length: {id: 18, value: '3.00000'}
    }
  };
  for (let f = 0; f < reviewsFake.results.length; f++) { // These next 2 for loops just compile the ratings from each individual
    reviewMetaFake.ratings[reviewsFake.results[f].rating]++; // fake review into the fake "meta" data.
    reviewMetaFake.recommended[reviewsFake.results[f].recommend ? 1 : 0]++;
  }
  for (let f = 1; f <= 5; f++) {
    reviewMetaFake.ratings[f] += '';
  }

  const [reviews, setReviews] = useState(reviewsFake);
  const [reviewMeta, setReviewMeta] = useState(reviewMetaFake);
  const [modalOpen, setModalOpen] = useState(false);
  const [maxReviews, setMaxReviews] = useState(2);

  return (<div id='ratings-and-reviews' role='review-section'>
    <h3>Ratings And Reviews</h3>

    <ReviewBreakdown
      avg={getAvgRating(reviewMeta.ratings)}
      ratings={reviewMeta.ratings}
      rec={reviewMeta.recommended} />

    <ReviewList
      reviews={reviews}
      maxReviews={maxReviews} />

    <button onClick={() => setMaxReviews(maxReviews + 2)}>
      Load more reviews
    </button>
    <div className="add-review" role='add-review'>
      <button onClick={() => setModalOpen(!modalOpen)}>
        Leave a review!
      </button>
      {
        modalOpen &&
        <ReviewModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      }
    </div>

    <ProductFactors factors={reviewMeta.characteristics} />
  </div>);
}

export default RatingsAndReviews;