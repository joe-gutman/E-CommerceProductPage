import React, { useState, useEffect } from 'react';
import AnswerListEntry from './AnswerListEntry.jsx';
import axios from 'axios';

const AnswerList = ({ question }) => {
  const [answers, setAnswers] = useState([]);

  var url = `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS}/qa/questions/${question.question_id}/answers?page=1&count=65`;
  var headers = {"Authorization": process.env.AUTH_SECRET}
  // console.log('qeustion id: ', question.question_id);
  useEffect(() => {
    axios.get(url, { headers })
      .then((response) => {
        // console.log('response: ', response.data.results);
        setAnswers(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])


  return (
    <div className='answer-list'>
      {
        answers.length !== 0 && answers.slice(0, 2).map((answer) => {
          return <AnswerListEntry answer={answer} key={answer.answer_id} />
        })
      }
    </div>
  );
};

export default AnswerList;