import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionListEntry from './QuestionListEntry.jsx';
import QuestionModal from './QuestionModal.jsx';

const QuestionList = ({ currentProduct, query }) => {
  const [questions, setQuestions] = useState([]);
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
  const [currentNumberOfQuestions, setCurrentNumberOfQuestions] = useState(2);  // display 2 questions on page
  const [userData, setUserData] = useState([]);

  const filteredQuestions = query.length < 3 ? questions : questions.filter((question) => {
    return question.question_body.toLowerCase().includes(query.toLowerCase());
  });

  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS}/qa/questions?product_id=${currentProduct.id}&count=100`;
  const headers = {"Authorization": process.env.AUTH_SECRET};

  useEffect(() => {
    getQuestionData();
  }, [currentProduct]);

  function getQuestionData() {
    getUserData();
    // get the questions from the DB to update # of clicks / order of data displayed
    getQuestions();
  };

  // get the array of question ids that the user finds `helpful` (this data is saved in localStorage)
  function getUserData() {
    var userData = JSON.parse(localStorage.getItem(`Q&A_${document.cookie}`)) || {answer: [], question: []};
    setUserData(userData);
  };

  // get the questions from the DB
  // the questions are already sorted by # of clicks, time created when retrieved
  function getQuestions() {
    axios.get(url, { headers })
      .then((response) => {
        setQuestions(response.data.results);
      });
  };

  function handleClick(event) {
    event.preventDefault();
    setIsQuestionModalOpen(!isQuestionModalOpen);
  };


  return (
    <>
      <div className='question-list'>
        <div className='question-list-content'>
          {
            filteredQuestions.length !== 0 &&
            filteredQuestions.slice(0, currentNumberOfQuestions).map((question) => {
              return (
                <QuestionListEntry
                  key={question.question_id}
                  currentProduct={currentProduct}
                  question={question}
                  userData={userData}
                  getQuestionData={getQuestionData}
                  getUserData={getUserData}
                />
              )
            })
          }
        </div>

        <div className='question-list-buttons'>
          <span>
            {
              query.length < 3 && questions.length > 2 &&
              currentNumberOfQuestions < questions.length &&
              <button
                className='bold-font button load-more-questions-btn'
                onClick={() => setCurrentNumberOfQuestions(currentNumberOfQuestions + 2)}>
                MORE ANSWERED QUESTIONS
              </button>
            }
          </span>
          <span>
            <button data-testid='add-question-btn' className='bold-font button add-question-btn' onClick={handleClick}>
              ADD A QUESTION +
            </button>
          </span>

          <div className='add-question-modal'>
            {/* {isQuestionModalO} */}
            {
              isQuestionModalOpen &&
              <QuestionModal
                currentProduct={currentProduct}
                isQuestionModalOpen={isQuestionModalOpen}
                setIsQuestionModalOpen={setIsQuestionModalOpen}
                getQuestions={getQuestions}
              />
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionList;