import React, { useState } from 'react';

const QuestionModal = ({ currentProduct, isQuestionModalOpen, setIsQuestionModalOpen }) => {
  const [questionInput, setQuestionInput] = useState({
    'question': '',
    'nickname': '',
    'email': ''
  });

  function handleChange(event) {
    setQuestionInput({
      ...questionInput,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsQuestionModalOpen(!isQuestionModalOpen);
    // console.log('questionInput', questionInput);
    //TODO: send POST request
  }


  return (
    <>
      <div className='modal'>
        <div className='modal-content'>
          <button className='close-modal' onClick={() => setIsQuestionModalOpen(!isQuestionModalOpen)}>
            X
          </button>
          <form>
            <h1>Ask Your Question</h1>
            <h2>About the {currentProduct.name}</h2>

            <label>
              Your Question *
              <textarea
                className='modal-form-input'
                name='question'
                rows='10'
                value={questionInput.question}
                onChange={handleChange}>
              </textarea>
            </label>

            <label>
              What is your nickname *
              <input
                className='modal-form-input'
                name='nickname'
                type='text'
                placeholder='Example: jack543!'
                value={questionInput.nickname}
                onChange={handleChange}
              />
            </label>

            <p>For privacy reasons, do not use your full name or email address</p>

            <label>
              Your email *
              <input
                className='modal-form-input'
                name='email'
                type='text'
                placeholder='Why did you like the product or not?'
                value={questionInput.email}
                onChange={handleChange}
              />
            </label>

            <p>For authentication reasons, you will not be emailed</p>

            <button className='submit-modal' onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default QuestionModal;