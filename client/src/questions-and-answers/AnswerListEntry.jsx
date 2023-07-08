import React from 'react';
import axios from 'axios';

const AnswerListEntry = ({ answer, userData, getAnswerData }) => {
  const [day, month, date, year] = new Date(answer.date).toDateString().split(' ');

  const clickedHelpfulAnswerIds = userData.answer;
  const isHelpfulClicked = clickedHelpfulAnswerIds.includes(answer.answer_id);

  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS}/qa/answers/${answer.answer_id}`;
  const headers = {"Authorization": process.env.AUTH_SECRET};

  function handleHelpfulClick(event) {
    event.preventDefault();
    // update the array of answer ids that the user finds `helpful` (this data is saved in localStorage)
    localStorage.setItem(`Q&A_${document.cookie}`, JSON.stringify({
      ...userData, answer: [...clickedHelpfulAnswerIds, answer.answer_id]
    }));
    // send a PUT request to add 1 helpfulness to the individual answer in DB
    axios.put(url + '/helpful', {}, { headers })
      .then((response) => {
        // re-render data after data in DB changed
        getAnswerData();
      })
      .catch((error) => {
        console.log(error);
      });

  };

  function handleReportClick(event) {
    event.preventDefault();
    axios.put(url + '/report', {}, { headers })
      .then((response) => {
        // re-render data after data in DB changed
        getAnswerData();
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <>
      <div className='answer-list-entry'>
        <div className='flex-container'>
          <div className='bold-font answer-list-entry-sidebar'>
            A:&nbsp;
          </div>

          <div className='small-font answer-list-entry-main'>
            <div className='small-font answer-list-entry-content'>
              {answer.body}
            </div>

            <div className='smaller-font answer-list-entry-footer'>
              <span>
                by {answer.answerer_name.toLowerCase() === 'seller' ?
                <b>Seller</b> : answer.answerer_name}, {`${month} ${date}, ${year}`}
              </span>
              <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
              <span> Helpful? &nbsp;&nbsp;&nbsp;
                <button
                  className='smaller-font button answer-helpful-btn'
                  onClick={handleHelpfulClick}
                  disabled={isHelpfulClicked}>
                  <u>Yes</u> ({answer.helpfulness})
                </button>
              </span>
              {/* <span>&nbsp;| &nbsp;&nbsp;</span> */}
              <span>
                <button
                  className='smaller-font button answer-report-btn'
                  onClick={handleReportClick}>
                  <u>Report</u>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnswerListEntry;