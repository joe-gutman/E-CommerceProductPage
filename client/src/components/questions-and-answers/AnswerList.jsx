import React, { useState, useEffect } from 'react';
import AnswerListEntry from './AnswerListEntry.jsx';
import axios from 'axios';

const AnswerList = ({ question }) => {
  const [answers, setAnswers] = useState([]);
  const [isFullyExpanded, setIsFullyExpanded] = useState(false);
  const [currentNumberOfAnswers, setCurrentNumberOfAnswers] = useState(2);

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
      });
  }, []);

  function handleClick() {
    if (isFullyExpanded) {
      setCurrentNumberOfAnswers(2);
      setIsFullyExpanded(false);
      return;
    };
    setCurrentNumberOfAnswers(currentNumberOfAnswers + 2);
    // setCurrentNumberOfAnswers happens async,
    // needs to add 2 since the currentNumberOfAnswers has not been updated yet
    if (currentNumberOfAnswers + 2 >= answers.length) {
      setIsFullyExpanded(true);
      console.log('here');
      return;
    };
  };


  return (
    <div className='answer-list'>
      <div className='answer-list-content'>
        {
          answers.length !== 0 &&
          answers.slice(0, currentNumberOfAnswers).map((answer) => {
            return <AnswerListEntry answer={answer} key={answer.answer_id} />
          })
        }
      </div>
      <div className='load-more-answers-button'>
        {
          answers.length > 2 &&
          <button onClick={handleClick}>
            {isFullyExpanded ? 'Collapse answers' : 'See more answers'}
          </button>
        }
      </div>
    </div>
  );
};

export default AnswerList;