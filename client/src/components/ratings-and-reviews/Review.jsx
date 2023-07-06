import React, { useEffect } from 'react';
import StarDisplay from '../shared-components/StarDisplay.jsx';

const Review = (props) => {

  return (<div className='review' role='review'>
    <div><StarDisplay name={'review' + props.review.review_id + '-star-display'} size={40} rating={props.review.rating}/></div>
    <div>{props.review.summary}</div>
    <div>{props.review.body}</div>
    <div>Customer {props.review.recommend ? 'recommends' : 'does not recommend'} this product.</div>
    <div>{props.review.helpfulness} user{props.review.helpfulness !== 1 ? 's' : ''} found this review helpful.</div>
    <div>Review posted by {props.review.reviewer_name} on {props.review.date}.</div>
  </div>);
}

export default Review;