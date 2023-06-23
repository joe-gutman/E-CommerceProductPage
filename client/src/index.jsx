import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Overview from './components/overview/Overview.jsx';

const axios = require('axios');

const App = () => {

  return (
    <div>
      <Overview />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);