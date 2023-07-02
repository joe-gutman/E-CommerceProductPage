import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionListEntry from './QuestionListEntry.jsx';
import QuestionModal from './QuestionModal.jsx';

const QuestionList = ({ currentProduct, query }) => {
  const [questions, setQuestions] = useState([]);
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
  const [currentNumberOfQuestions, setCurrentNumberOfQuestions] = useState(2);

  const filteredQuestions = query.length < 3 ? questions : questions.filter((question) => {
    return question.question_body.toLowerCase().includes(query.toLowerCase());
  })

  var url = `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS}/qa/questions?product_id=${40347}&count=20`;
  var headers = {"Authorization": process.env.AUTH_SECRET};

  useEffect(() => {
    axios.get(url, { headers })
      .then((response) => {
        // console.log('response: ', response.data.results);
        // var questionArray = response.data.results;
        // var sortedQuestionArray = questionArray.sort((a, b) => {
        //   a.helpfulness - b.helpfulness;
        // })
        // console.log('data:' , questionArray);
        // console.log('sorted: ', sortedQuestionArray);
        setQuestions(response.data.results);
      });
  }, []);

  function handleClick(event) {
    event.preventDefault();
    setIsQuestionModalOpen(!isQuestionModalOpen)
  }


  return (
    <div className='question-list'>
      <div
        className='question-list-content'
        style={currentNumberOfQuestions > 4 ? {overflowY: 'scroll'} : null}>
        {
          filteredQuestions.length !== 0 &&
          filteredQuestions.slice(0, currentNumberOfQuestions).map((question) => {
            return (
              <QuestionListEntry
              currentProduct={currentProduct}
              question={question}
              key={question.question_id}
              />
              )
            })
          }
      </div>

      <div className='load-more-questions-btn'>
        {
          query.length < 3 && questions.length > 2 &&
          currentNumberOfQuestions < questions.length &&
          <button onClick={() => setCurrentNumberOfQuestions(currentNumberOfQuestions + 2)}>
            MORE ANSWERED QUESTIONS
          </button>
        }
      </div>

      <div className="add-question-btn">
        <button onClick={handleClick}>
          ADD A QUESTION +
        </button>
        {
          isQuestionModalOpen &&
          <QuestionModal
            currentProduct={currentProduct}
            isQuestionModalOpen={isQuestionModalOpen}
            setIsQuestionModalOpen={setIsQuestionModalOpen}
          />
        }
      </div>
    </div>
  );
};

export default QuestionList;