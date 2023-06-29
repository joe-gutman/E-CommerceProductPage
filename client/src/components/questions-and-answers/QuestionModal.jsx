import React, { useState } from 'react';

const QuestionModal = ({ currentProduct, toggleModal }) => {
  const [questionInput, setQuestionInput] = useState({

  });
  return (
    <>
      <div className='question-modal'>
        <div className='question-modal-content'>
          <button className='close-modal' onClick={toggleModal}>
            X
          </button>
          <form>
            <h1>Ask Your Question</h1>
            <h2>About the {currentProduct.name}</h2>
            <label>Your Question *</label>
            <textarea className='modal-form-input' rows='10'>
            </textarea>
            <label>
              What is your nickname *
            </label>
            <input
              className='modal-form-input'
              type='text'
              placeholder='Example: jack543!'
            />
            <p>For privacy reasons, do not use your full name or email address</p>
            <label>Your email *</label>
            <input
              className='modal-form-input'
              type='text'
              placeholder='Why did you like the product or not?'
            />
            <p>For authentication reasons, you will not be emailed</p>
            <button className='submit-modal' onClick={toggleModal}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default QuestionModal;