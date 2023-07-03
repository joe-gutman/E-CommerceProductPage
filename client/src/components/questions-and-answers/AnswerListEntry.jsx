import React from 'react';

const AnswerListEntry = ({ answer }) => {

  return (
    <>
      <div className='answer-list-entry'>
        <div className='answer-list-entry-content'>
          A: {answer.body}
        </div>
        <div className='answer-list-entry-footer'>
          by {answer.answerer_name} date {answer.date}
          <span> Helpful?
            <button>Yes {answer.helpfulness}</button>
          </span>
          <span>
            <button>Report</button>
          </span>
        </div>
      </div>
    </>
  );
};

export default AnswerListEntry;