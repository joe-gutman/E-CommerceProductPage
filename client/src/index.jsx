import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import RelatedItems from './components/relatedItems/RelatedItems.jsx';

const axios = require('axios');

const App = () => {

  return (
    <div>
      <RelatedItems />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);