import React, { useState } from 'react';

const ReviewModal = ({modalOpen, setModalOpen}) => {
  const [reviewInput, setReviewInput] = useState({
    'rating': 0,
    'summary': '',
    'body': '',
    'recommend': true,
    'name': '',
    'email': '',
    'photos': [],
    'characteristics': {}
  });

  function handleChange(event) {
    setReviewInput({
      ...reviewInput,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setModalOpen(!modalOpen);
    // console.log('reviewInput', reviewInput);
    //TODO: send POST request
  }


  return (
    <>
      <div className='modal'>
        <div className='modal-content'>
          <button className='close-modal' onClick={() => setModalOpen(!modalOpen)}>
            X
          </button>
          <form>
            <h1>Write Your Review</h1>
            <label>
              Rating
              <select className='modal-form-input' name='rating'>
                <option value='1'>1 star</option>
                <option value='2'>2 stars</option>
                <option value='3'>3 stars</option>
                <option value='4'>4 stars</option>
                <option value='5'>5 stars</option>
              </select>
            </label>
            <label>
              <input name='recommend' type='checkbox' />
              Do you recommend this product?
            </label>
            <label>
              Review Title *
              <textarea
                className='modal-form-input'
                name='summary'
                rows='1'
                value={reviewInput.summary}
                onChange={handleChange}>
              </textarea>
            </label>
            <label>
              Your Review *
              <textarea
                className='modal-form-input'
                name='body'
                rows='2'
                value={reviewInput.body}
                onChange={handleChange}>
              </textarea>
            </label>

            <label>
              What is your nickname *
              <input
                className='modal-form-input'
                name='name'
                type='text'
                placeholder='Example: jack543!'
                value={reviewInput.nickname}
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
                placeholder=''
                value={reviewInput.email}
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
}

export default ReviewModal;