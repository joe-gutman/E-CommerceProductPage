import React, { useState } from 'react';
import SearchBar from './questions-and-answers/SearchBar.jsx';
import QuestionList from './questions-and-answers/QuestionList.jsx';

const QuestionsAndAnswers = ({ currentProduct }) => {
  return (
    <>
      <h1>QUESTIONS & ANSWERS</h1>
      <SearchBar />
      <QuestionList currentProduct={currentProduct} />
    </>
  )
}

export default QuestionsAndAnswers;