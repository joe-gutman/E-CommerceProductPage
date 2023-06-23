import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import QuestionsAndAnswers from './components/questionsAndAnswers/QuestionsAndAnswers.jsx';

const axios = require('axios');

const App = () => {

  return (
    <div>
      <QuestionsAndAnswers />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);