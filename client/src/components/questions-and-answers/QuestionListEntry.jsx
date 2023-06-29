import React, { useState } from 'react';
import QuestionModal from './QuestionModal.jsx';

const QuestionListEntry = ({ currentProduct, question }) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal(event) {
    event.preventDefault();
    setIsOpen(!isOpen)
    if (event.target.className === 'submit-modal') {
      console.log('Send a PUT request');
    }
  }

  return (
    <>
      <div>Q: {question.question_body}</div>
      <span> Helpful?
        <button>
          Yes ({question.question_helpfulness})
        </button>
      </span>
      <span>
        <button onClick={toggleModal}>
          Add Answer
        </button>
        {isOpen && <QuestionModal currentProduct={currentProduct} toggleModal={toggleModal}/>}
      </span>
    </>
  )
};

export default QuestionListEntry;