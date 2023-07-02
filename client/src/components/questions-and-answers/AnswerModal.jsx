import React, { useState } from 'react';
import axios from 'axios';

const AnswerModal = ({ currentProduct, question, isAnswerModalOpen, setIsAnswerModalOpen }) => {
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
    addAnswerToDb();
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
    var headers = {"Authorization": process.env.AUTH_SECRET}

    // console.log('question id: ', question.question_id);
    axios.post(url, answerInput, { headers })
      .catch((error) => {
        console.log(error);
      });
  }


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
                name='body'
                rows='10'
                maxlength='1000'
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
                maxlength='60'
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
                maxlength='60'
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