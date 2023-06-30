import React, { useState } from 'react';
import AnswerModal from './AnswerModal.jsx';

const QuestionListEntry = ({ currentProduct, question }) => {
  const [isAnswerModalOpen, setIsAnswerModalOpen] = useState(false);

  function handleClick() {
    console.log('helpful');
    // TODO: PUT request
  }


  return (
    <>
      <div>Q: {question.question_body}</div>
      <span> Helpful?
        <button onClick={handleClick}>
          Yes ({question.question_helpfulness})
        </button>
      </span>
      <span>
        <button onClick={() => setIsAnswerModalOpen(!isAnswerModalOpen)}>
          Add Answer
        </button>
        {
          isAnswerModalOpen &&
          <AnswerModal currentProduct={currentProduct} question={question} isAnswerModalOpen={isAnswerModalOpen} setIsAnswerModalOpen={setIsAnswerModalOpen}/>
        }
      </span>
    </>
  )
};

export default QuestionListEntry;