import React, { useState } from 'react';

const ReviewModal = ({modalOpen, setModalOpen}) => {
  const [reviewInput, setReviewInput] = useState({
    'rating': 0,
    'summary': '',
    'body': '',
    'recommend': true,
    'name': '',
    'email': '',
    'photos': [], //TODO: photo-uploading system?
    'characteristics': {14: 3, 15: 3, 16: 3, 17: 3, 18: 3}
  });

  function handleChange(event) {
    setReviewInput({
      ...reviewInput,
      [event.target.name]: event.target.value
    });
  }

  function handleCharacteristic(event) {
    reviewInput.characteristics[event.target.name] = Number(event.target.value);
    //console.log(reviewInput.characteristics);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setModalOpen(!modalOpen);
    // console.log('reviewInput', reviewInput);
    //TODO: send POST request
  }

  return (
    <>
      <div className='review-modal'>
        <div className='modal-content'>
          <button className='close-modal' onClick={() => setModalOpen(!modalOpen)}>
            X
          </button>
          <form>
            <h1>Write Your Review</h1>

            <label>
              Rating
              <select
                className='modal-form-input'
                name='rating'
                onChange={handleChange}>
                <option value='1'>1 star</option>
                <option value='2'>2 stars</option>
                <option value='3'>3 stars</option>
                <option value='4'>4 stars</option>
                <option value='5'>5 stars</option>
              </select>
            </label>

            <label>
              Size
              <select
                className='modal-form-input'
                name={14}
                onChange={handleCharacteristic}
                defaultValue='3'>
                <option value='1'>1 - Very small</option>
                <option value='2'>2 - Somewhat small</option>
                <option value='3'>3 - Just right</option>
                <option value='4'>4 - Somewhat large</option>
                <option value='5'>5 - Very large</option>
              </select>
            </label>
            <label>
              Width
              <select
                className='modal-form-input'
                name={15}
                onChange={handleCharacteristic}
                defaultValue='3'>
                <option value='1'>1 - Very thin</option>
                <option value='2'>2 - Somewhat thin</option>
                <option value='3'>3 - Just right</option>
                <option value='4'>4 - Somewhat wide</option>
                <option value='5'>5 - Very wide</option>
              </select>
            </label>
            <label>
              Comfort
              <select
                className='modal-form-input'
                name={16}
                onChange={handleCharacteristic}
                defaultValue='3'>
                <option value='1'>1 - Very uncomfortable</option>
                <option value='2'>2 - Somewhat uncomfortable</option>
                <option value='3'>3 - Neutral</option>
                <option value='4'>4 - Somewhat comfortable</option>
                <option value='5'>5 - Very comfortable</option>
              </select>
            </label>
            <label>
              Quality
              <select
                className='modal-form-input'
                name={17}
                onChange={handleCharacteristic}
                defaultValue='3'>
                <option value='1'>1 - Very low</option>
                <option value='2'>2 - Somewhat low</option>
                <option value='3'>3 - Neutral</option>
                <option value='4'>4 - Somewhat high</option>
                <option value='5'>5 - Very high</option>
              </select>
            </label>
            <label>
              Length
              <select
                className='modal-form-input'
                name={18}
                onChange={handleCharacteristic}
                defaultValue='3'>
                <option value='1'>1 - Very short</option>
                <option value='2'>2 - Somewhat short</option>
                <option value='3'>3 - Just right</option>
                <option value='4'>4 - Somewhat long</option>
                <option value='5'>5 - Very long</option>
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
                maxLength={60}
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
                maxLength={100}
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
                maxLength={20}
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