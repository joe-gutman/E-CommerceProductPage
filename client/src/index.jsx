import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import QuestionsAndAnswers from './components/questionsAndAnswers/QuestionsAndAnswers.jsx';
import Overview from './components/overview/Overview.jsx';


const axios = require('axios');

const App = () => {

  return (
    <div>
      <QuestionsAndAnswers />
      <Overview />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);