import React { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionListEntry from './QuestionListEntry.jsx';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    axios.get('/qa/questions');
  }, [])
  return (
    <div>
      <div>Question List</div>
      {questions.map((question) => {
        return <QuestionListEntry question={question}/>
      })}
    </div>
  )
};

export default QuestionList;