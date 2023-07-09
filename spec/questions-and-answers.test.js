require('dotenv').config();
import React, { useState } from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import App from '../client/src/index.jsx';
import QuestionModal from '../client/src/components/questions-and-answers/QuestionModal.jsx';
import AnswerModal from '../client/src/components/questions-and-answers/AnswerModal.jsx';
import QuestionList from '../client/src/components/questions-and-answers/QuestionList.jsx';
import AnswerListEntry from '../client/src/components/questions-and-answers/AnswerListEntry.jsx';
import AnswerList from '../client/src/components/questions-and-answers/AnswerList.jsx';


describe("Render data for Questions and Answers", () => {
  var request = require('supertest')('https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS}');
  var headers = {"Authorization": process.env.AUTH_SECRET};

  test('send a GET request to retrieve question data', (done) => {
    request
      .get('/qa/questions?product_id=40348&count=4')
      .set('Authorization', process.env.AUTH_SECRET)
      .expect(200)
      .expect(function (res) {
        expect(res.body.results[0].question_id).toBe(646305);
        expect(res.body.results[0].question_body).toEqual('How do they do it');
      })
      .end(function(err, res) {
        if (err) return done(err);
        return done();
      })
  });

  test('send a GET request to retrieve answer data', (done) => {
    request
      .get('/qa/questions/644403/answers?page=1&count=100')
      .set('Authorization', process.env.AUTH_SECRET)
      .expect(200)
      .expect(function (res) {
        expect(Array.isArray(res.body.results)).toBe(true);
      })
      .end(function(err, res) {
        if (err) return done(err);
        return done();
      })
  });
});

describe("Questions and Answers Components exist", () => {
  test('Popup window for Adding Question exists', () => {
    function WrapperCompent() {
      const [isModalOpen, setIsModalOpen] = useState(true);
      const currentProduct = {id: 1, name: 'test object'}

      return <QuestionModal isQuestionModalOpen={isModalOpen} setIsQuestionModalOpen={setIsModalOpen} currentProduct={currentProduct}/>
    }
    render(<WrapperCompent />)
    expect(document.querySelector('#question-modal')).not.toBeNull();
  });

  test('Popup window for Adding Answer exists', () => {
    function WrapperCompent() {
      const [isModalOpen, setIsModalOpen] = useState(true);
      const currentProduct = {id: 1, name: 'test object'}
      const question = {question_body: 'test question body'}

      return <AnswerModal currentProduct={currentProduct} question={question} isAnswerModalOpen={isModalOpen} setIsAnswerModalOpen={setIsModalOpen}/>
    }
    render(<WrapperCompent />)
    expect(document.querySelector('#answer-modal')).not.toBeNull();
  });

  const answers = [
    {
      "answer_id": 5992619,
      "body": "test answer",
      "date": "2023-07-02T00:00:00.000Z",
      "answerer_name": "team saturn",
      "helpfulness": 0,
      "photos": []
    }, {
    "answer_id": 5992625,
    "body": "test answer",
    "date": "2023-07-02T00:00:00.000Z",
    "answerer_name": "team saturn",
    "helpfulness": 0,
    "photos": []
    }
  ];
  const userData = {answer: [1, 2, 3]}

  test('Answer List exists', () => {
    render(<AnswerList answers={answers} userData={userData} />)
    expect(document.querySelector('#answer-list')).not.toBeNull();
  });

  test('Answer List Entry exists', () => {
    render(<AnswerListEntry answer={answers[0]} userData={userData} />)
    expect(document.querySelector('#answer-list-entry')).not.toBeNull();
  });
});

describe("All popup windows should be closed by default", () => {
  test('Popup window for Adding Question is closed by default', () => {
    const currentProduct = {id: 1, name: 'test object'}
    render(<QuestionList currentProduct={currentProduct} query=''/>)
    expect(document.querySelector('#question-modal')).toBeNull();
  });

  test('Popup window for Adding Question is closed by default', () => {
    const currentProduct = {id: 1, name: 'test object'}
    render(<QuestionList currentProduct={currentProduct} query=''/>)
    expect(document.querySelector('#question-modal')).toBeNull();
  });
});


test('', () => {
  const currentProduct = {id: 1, name: 'test object'}
  render(<QuestionList currentProduct={currentProduct} query=''/>);
  fireEvent.click(screen.getByTestId('add-question-btn'));
  expect(screen.getByRole('open-question-and-answer-modal')).not.toBeNull();
})




