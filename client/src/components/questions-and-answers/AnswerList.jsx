import React, { useState, useEffect } from 'react';
import AnswerListEntry from './AnswerListEntry.jsx';
import axios from 'axios';

const AnswerList = ({ answers, userData, getAnswers, getUserData }) => {
  const [isFullyExpanded, setIsFullyExpanded] = useState(false);
  const [currentNumberOfAnswers, setCurrentNumberOfAnswers] = useState(2);

  useEffect(() => {
    setIsFullyExpanded(answers.length === currentNumberOfAnswers)
  }, [answers]);

  function getAnswerData() {
    // get user data from localStorage
    getUserData();
    // get answers from DB
    getAnswers();
  }

  function handleClick(event) {
    event.preventDefault();
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
      return;
    };
  };


  return (
    <div className='answer-list'>
      <div className='answer-list-content'>
        {
          answers.length !== 0 &&
          answers.slice(0, currentNumberOfAnswers).map((answer) => {
            return (
              <AnswerListEntry
                answer={answer}
                userData={userData}
                getAnswerData={getAnswerData}
                key={answer.answer_id}
              />
            )
          })
        }
      </div>
      {
        answers.length > 2 ?
        <button className='bold-font button load-more-answers-btn' onClick={handleClick}>
          {isFullyExpanded ? 'COLLAPSE ANSWERS' : 'SEE MORE ANSWERS'}
        </button> : null
      }
    </div>
  );
};

export default AnswerList;