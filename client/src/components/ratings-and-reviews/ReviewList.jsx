import React, { useEffect } from 'react';
import Review from './Review.jsx';

const ReviewList = (props) => {

  return (<div role='review-list'>
    <h4>Reviews</h4>
    {props.reviews.results.map((r) => (
      <Review review={r} key={r.review_id}/>
    ))}
  </div>);
}

export default ReviewList;