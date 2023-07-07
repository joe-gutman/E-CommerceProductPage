import React, { useState, useEffect } from 'react';
import AnswerModal from './AnswerModal.jsx';
import AnswerList from './AnswerList.jsx';
import axios from 'axios';

const QuestionListEntry = ({ currentProduct, question, userData, getQuestionData, getUserData }) => {
  const [answers, setAnswers] = useState([]);
  const [isAnswerModalOpen, setIsAnswerModalOpen] = useState(false);

  const clickedHelpfulQuestionIds = userData.question;
  const isHelpfulClicked = clickedHelpfulQuestionIds.includes(question.question_id);
  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS}/qa/questions/${question.question_id}`;
  const headers = {"Authorization": process.env.AUTH_SECRET};

  useEffect(() => {
    getAnswers();
  }, []);

  // get answers from DB
  // define the function in this parent component instead of AnswerList
  // becuase AnswerModal needs to re-render (getAnswers) after submitting a new answer
  function getAnswers() {
    axios.get(url + '/answers?page=1&count=65', { headers })
      .then((response) => {
        // sort the answers: any answers from the seller should appear at the top of the list
        var answerArray = response.data.results;
        var sellerArray = [];
        var nonSellerArray = [];
        if (answerArray.length !== 0) {
          answerArray.map((answer) => {
            var name = answer.answerer_name.toLowerCase();
            if (name.includes('seller')) {
              sellerArray.push(answer);
            } else {
              nonSellerArray.push(answer);
            };
          });
        };
        var sortedAnswerArray = sellerArray.concat(nonSellerArray);
        setAnswers(sortedAnswerArray);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function handleHelpfulClick(event) {
    event.preventDefault();
    // update the array of question ids that the user finds `helpful` (this data is saved in localStorage)
    localStorage.setItem(`Q&A_${document.cookie}`, JSON.stringify({
      ...userData, question: [...clickedHelpfulQuestionIds, question.question_id]
    }));
    // send a PUT request to add 1 helpfulness to the individual question in DB
    axios.put(url + '/helpful', {}, { headers })
      .then((response) => {
        // re-render data after data in DB changed
        getQuestionData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function handleReportClick(event) {
    event.preventDefault();
    // send a PUT request to report (delete) the individual question in DB
    axios.put(url + '/report', {}, { headers })
      .then((response) => {
        // re-render data after data in DB changed
        getQuestionData();
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <>
      <div className='question-list-entry flex-container'>
        <div className='inline question-list-entry-content'>
          <div className='flex-container'>
            <span className='bold-font'>Q:&nbsp;</span>
            <span className='bold-font'>{question.question_body}</span>
          </div>

          <AnswerList
            answers={answers}
            userData={userData}
            getAnswers={getAnswers}
            getUserData={getUserData}
          />
        </div>

        <div className='inline smaller-font question-list-entry-sidebar'>
          <span> Helpful?
            <button
              className='button smaller-font question-helpful-btn'
              onClick={handleHelpfulClick}
              disabled={isHelpfulClicked}>
              <u>{'Yes'}</u> ({question.question_helpfulness})
            </button>
          </span>
          <span>
            <button
              className='button smaller-font question-add-answer-btn'
              onClick={() => setIsAnswerModalOpen(!isAnswerModalOpen)}>
              <u>Add Answer</u>
            </button>
          </span>
          <span>
            <button
              className='smaller-font button question-report-btn'
              onClick={handleReportClick}>
              <u>Report</u>
            </button>
          </span>
        </div>

        <div className='add-answer-modal'>
          {
            isAnswerModalOpen &&
            <AnswerModal
              currentProduct={currentProduct}
              question={question}
              isAnswerModalOpen={isAnswerModalOpen}
              setIsAnswerModalOpen={setIsAnswerModalOpen}
              getAnswers={getAnswers}
            />
          }
        </div>
      </div>
    </>
  );
};

export default QuestionListEntry;