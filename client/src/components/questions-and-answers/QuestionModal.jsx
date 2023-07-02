import React, { useState } from 'react';
import axios from 'axios';

const QuestionModal = ({ currentProduct, isQuestionModalOpen, setIsQuestionModalOpen }) => {
  const [questionInput, setQuestionInput] = useState({
    'product_id': currentProduct.id,
    'body': '',
    'name': '',
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
    var [isValid, message] = checkValidInput();
    if (!isValid) {
      alert('You must enter the following: \n' + message);
      return;
    }
    setIsQuestionModalOpen(!isQuestionModalOpen);
    addQuestionToDb();
  };

  function checkValidInput() {
    var isValid = true;
    var message = '';

    for (var key of Object.keys(questionInput)) {
      if (questionInput[key] === '') {
        isValid = false;
        message += key + '\n';
      }
    }
    return [isValid, message];
  }

  function addQuestionToDb() {
    var url = `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS}/qa/questions`;
    var headers = {"Authorization": process.env.AUTH_SECRET}

    axios.post(url, questionInput, { headers })
      .catch((error) => {
        console.log(error);
      });
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
                name='body'
                rows='10'
                maxlength='1000'
                value={questionInput.question}
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
                maxlength='60'
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