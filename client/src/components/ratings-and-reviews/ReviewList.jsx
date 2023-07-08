import React, { useEffect } from 'react';
import Review from './Review.jsx';

const ReviewList = (props) => {

  return (<div role='review-list'>
    <h2 className = "sub-titles"> Reviews</h2>
    <div className='review-list-content'>
      {props.reviews.results.slice(0, props.maxReviews).map((r) => (
        <Review review={r} key={r.review_id}/>
      ))}
    </div>
  </div>);
}

export default ReviewList;