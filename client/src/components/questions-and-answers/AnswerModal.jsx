import React, { useState } from 'react';

const AnswerModal = ({ currentProduct, question, isAnswerModalOpen, setIsAnswerModalOpen }) => {
  const [answerInput, setAnswerInput] = useState({
    'answer': '',
    'nickname': '',
    'email': ''
  });

  function handleChange(event) {
    setAnswerInput({
      ...answerInput,
      [event.target.name]: event.target.value
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    setIsAnswerModalOpen(!isAnswerModalOpen);
    console.log('answerInput', answerInput);
    //TODO: send POST request
  };


  return (
    <>
      <div className='modal'>
        <div className='modal-content'>
          <button className='close-modal' onClick={() => setIsAnswerModalOpen(!isAnswerModalOpen)}>
            X
          </button>
          <form>
            <h1>Submit your Answer</h1>
            <h2>{currentProduct.name}: {question.question_body}</h2>

            <label>
              Your Answer *
              <textarea
                className='modal-form-input'
                name='answer'
                rows='10'
                value={answerInput.answer}
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
                value={answerInput.nickname}
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
                placeholder='Example: jack@email.com'
                value={answerInput.email}
                onChange={handleChange}
              />
            </label>

            <p>For authentication reasons, you will not be emailed</p>

            <button className='upload-photo'>
              Upload Photos
            </button>
            <button className='submit-modal' onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AnswerModal;