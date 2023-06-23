import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import RatingsAndReviews from './components/RatingsAndReviews.jsx';

const axios = require('axios');

const App = () => {

  return (
    <div>
      <RatingsAndReviews />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);