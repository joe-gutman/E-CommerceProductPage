import React, { useState, useEffect } from 'react';
import AnswerModal from './AnswerModal.jsx';
import AnswerList from './AnswerList.jsx';
import axios from 'axios';

const QuestionListEntry = ({ currentProduct, question }) => {
  const [isAnswerModalOpen, setIsAnswerModalOpen] = useState(false);

  function handleClick() {
    // console.log('helpful');
    // TODO: PUT request
  }


  return (
    <>
      <div className='question-list-entry'>
        <div>Q: {question.question_body}</div>
        <span> Helpful?
          <button onClick={handleClick}>
            <u>Yes</u> ({question.question_helpfulness})
          </button>
        </span>
        <span>
          <button onClick={() => setIsAnswerModalOpen(!isAnswerModalOpen)}>
            Add Answer
          </button>
        </span>
        {
          isAnswerModalOpen &&
          <AnswerModal
            currentProduct={currentProduct}
            question={question}
            isAnswerModalOpen={isAnswerModalOpen}
            setIsAnswerModalOpen={setIsAnswerModalOpen}
          />
        }
        <AnswerList question={question}/>
      </div>
    </>
  );
};

export default QuestionListEntry;