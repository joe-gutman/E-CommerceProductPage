import React, { useState, useEffect } from 'react';
import StarDisplay from '../shared-components/StarDisplay.jsx';

const Review = (props) => {
  const [helpfulness, setHelpfulness] = useState(props.review.helpfulness); //TODO: only one click per user
  return (
    <div className='review' role='review'>
      <div className='flex-container'>
        <div className='star'><StarDisplay name={'review' + props.review.review_id + '-star-display'} size={40} rating={props.review.rating}/></div>
        <div className='review-title'>{props.review.summary}</div>
      </div>
      <hr></hr>
      <div className='review-entry-content'>
        <div className ='review-body' >{props.review.body}</div>
        <div>Customer {props.review.recommend ? 'recommends' : 'does not recommend'} this product.</div>
      </div>
      <div className='review-footer smaller-font'>
        <button id='add-helpfulness-btn' className='button smaller-font' onClick={() => setHelpfulness(helpfulness + 1)}>Helpful?</button>
        &nbsp;&nbsp;&nbsp;{helpfulness} user{helpfulness !== 1 ? 's' : ''}  found this review helpful.
      </div>
      <div className='reviewer smaller-font'>Review posted by {props.review.reviewer_name} on {props.review.date}.</div>
      <div className='review'>Response: {props.review.response}</div>
    </div>
  );
}

export default Review;