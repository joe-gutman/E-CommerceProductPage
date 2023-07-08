import React, { useState } from 'react';
import SearchBar from './questions-and-answers/SearchBar.jsx';
import QuestionList from './questions-and-answers/QuestionList.jsx';

const QuestionsAndAnswers = ({ currentProduct }) => {
  const [query, setQuery] = useState('');
  return (
    <div className='main-questions-and-answers'>
      <h2 className='title'>QUESTIONS & ANSWERS</h2>
      <SearchBar query={query} setQuery={setQuery} />
      <QuestionList currentProduct={currentProduct} query={query} />
    </div>
  );
};

export default QuestionsAndAnswers;