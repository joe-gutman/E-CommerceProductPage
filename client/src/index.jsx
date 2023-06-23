import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Overview from './components/Overview.jsx';
import RatingsAndReviews from './components/RatingsAndReviews.jsx';
import QuestionsAndAnswers from './components/QuestionsAndAnswers.jsx';
import RelatedItems from './components/RelatedItems.jsx';

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

ReactDOM.render(
  <App />,
  document.getElementById('root')
);