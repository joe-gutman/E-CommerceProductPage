import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionListEntry from './QuestionListEntry.jsx';
import QuestionModal from './QuestionModal.jsx';

const QuestionList = ({ currentProduct }) => {
  const [questions, setQuestions] = useState([]);
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
  const [currentNumberOfQuestions, setCurrentNumberOfQuestions] = useState(2);

  // console.log('product_id: ', currentProduct.id);

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


  return (
    <div className='question-list'>
      Question List
      <div
        className='question-list-content'
        style={currentNumberOfQuestions > 4 ? {overflowY: 'scroll'} : null}>
        {
          questions.length !== 0 &&
          questions.slice(0, currentNumberOfQuestions).map((question) => {
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
          questions.length > 2 && currentNumberOfQuestions < questions.length &&
          <button onClick={() => setCurrentNumberOfQuestions(currentNumberOfQuestions + 2)}>
            MORE ANSWERED QUESTIONS
          </button>
        }
      </div>

      <div className="add-question-btn">
        <button onClick={() => setIsQuestionModalOpen(!isQuestionModalOpen)}>
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