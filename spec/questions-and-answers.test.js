require('dotenv').config();

import { render, within } from '@testing-library/react';
import App from '../client/src/index.jsx';


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


const { getByRole } = render(<App />);
const { getByRole: getChildByRole } = within(getByRole('main-questions-and-answers'));
// describe()


test('renders component with async data and finds element by role', async () => {
  // Render your component
  const currentRelatedProducts = await fetchCurrentRelatedIds();
  // const relatedProducts = await fetchRelatedProducts();
  const currentProduct = await fetchCurrentProduct();

  const { getByRole } = render(<RelatedProductsList currentRelatedProducts = {currentRelatedProducts} currentProduct = {currentProduct} getAvgRating = {getAvgRating} />);


  // Wait for the async data to be fetched
  await waitFor(() => {
    currentRelatedProducts.map((relatedProduct, index) => {
      var element = getByRole(show-details-of-related-product-${index});
      expect(element).toBeInTheDocument();
  })
    // Perform assertions after the data is available

    // Additional assertions...
  });
});