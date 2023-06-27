import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Overview from './components/overview/Overview.jsx';
import RatingsAndReviews from './components/RatingsAndReviews.jsx';
import QuestionsAndAnswers from './components/questionsAndAnswers/QuestionsAndAnswers.jsx';
import RelatedItems from './components/relatedItems/RelatedItems.jsx';

const axios = require('axios');

const App = () => {

  return (
    <div>
      <Overview />
      <RatingsAndReviews />
      <QuestionsAndAnswers />
      <RelatedItems />
    </div>
  );
}

const getAvgRating = function (ratings) {
  let count = 0;
  let result = 0;
  for (let f = 1; f <= 5; f++) {
    count += ratings[f];
    result += ratings[f] * f;
  }
  if (count > 0) {
    result /= count;
    result = (Math.round(result * 100) / 100);
  }
  return result;
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);