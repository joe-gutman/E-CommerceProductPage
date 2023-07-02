import React from 'react';

const AnswerListEntry = ({ answer }) => {
  const [day, month, date, year] = new Date(answer.date).toDateString().split(' ');


  return (
    <>
      <div className='answer-list-entry'>
        <div className='answer-list-entry-content'>
          A: {answer.body}
        </div>

        <div className='answer-list-entry-footer'>
          <span>
            by {answer.answerer_name.toLowerCase() === 'seller' ? <b>Seller</b> : answer.answerer_name}, {`${month} ${date}, ${year}`}
          </span>
          <span> Helpful?
            <button><u>Yes</u> ({answer.helpfulness})</button>
          </span>
          <span>
            <button><u>Report</u></button>
          </span>
        </div>
      </div>
    </>
  );
};

export default AnswerListEntry;