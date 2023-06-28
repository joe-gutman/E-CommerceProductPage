import React, { useState } from 'react';
import SearchBar from './questions-and-answers/SearchBar.jsx';
import QuestionList from './questions-and-answers/QuestionList.jsx';

const QuestionsAndAnswers = () => {
  return (
    <>
      <div>QuestionsAndAnswers</div>
      <SearchBar />
      <QuestionList />
    </>
  )
}

export default QuestionsAndAnswers;