import React, { useState } from 'react';
import axios from 'axios';

const AnswerModal = ({ currentProduct, question, isAnswerModalOpen, setIsAnswerModalOpen, getAnswers }) => {
  const [answerInput, setAnswerInput] = useState({
    'body': '',
    'name': '',
    'email': '',
    'photos': []
  });

  function handleChange(event) {
    setAnswerInput({
      ...answerInput,
      [event.target.name]: event.target.value
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    var [isValid, message] = checkValidInput();
    if (!isValid) {
      alert('You must enter the following: \n' + message);
      return;
    }
    setIsAnswerModalOpen(!isAnswerModalOpen);
    addAnswerToDb()
      .then(() => {
        console.log('get answers added to db');
        getAnswers();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function checkValidInput() {
    var isValid = true;
    var message = '';

    for (var key of Object.keys(answerInput)) {
      if (answerInput[key] === '') {
        isValid = false;
        message += key + '\n';
      }
    }
    return [isValid, message];
  }

  function addAnswerToDb() {
    var url = `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS}/qa/questions/${question.question_id}/answers`;
    var headers = { 'Authorization' : process.env.AUTH_SECRET, 'withCredentials': true };

    // console.log('question id: ',  question.question_id);

    return axios.post(url, answerInput, { 'headers': headers });
  }


  return (
    <>
      <div className='question-and-answer-modal'>
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
                name='body'
                rows='10'
                maxLength='1000'
                value={answerInput.answer}
                onChange={handleChange}>
              </textarea>
            </label>

            <label>
              What is your nickname *
              <input
                className='modal-form-input'
                name='name'
                type='text'
                maxLength='60'
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
                maxLength='60'
                placeholder='Example: jack@email.com'
                value={answerInput.email}
                onChange={handleChange}
              />
            </label>

            <p>For authentication reasons, you will not be emailed</p>

            <button className='upload-photo-btn'>
              Upload Photos
            </button>
            <button className='submit-modal-btn' onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AnswerModal;