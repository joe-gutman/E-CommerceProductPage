import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionListEntry from './QuestionListEntry.jsx';

const QuestionList = ({ currentProduct }) => {
  const [questions, setQuestions] = useState([]);
  // console.log('product_id: ', currentProduct.id);
  var url = `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS}/qa/questions?product_id=${currentProduct.id}&count=20`;
  var headers = {"Authorization": process.env.AUTH_SECRET}
  useEffect(() => {
    axios.get(url, { headers })
      .then((response) => {
        // console.log('response: ', response.data.results);
        setQuestions(response.data.results);
      })
  }, [])
  return (
    <div>
      <div>Question List</div>
      {questions.length !== 0 && questions.slice(0, 2).map((question) => {
        return <QuestionListEntry currentProduct={currentProduct} question={question} key={question.question_id}/>
      })}
    </div>
  )
};

export default QuestionList;