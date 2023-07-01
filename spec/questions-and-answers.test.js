require('dotenv').config();


describe("Render data for Questions and Answers", () => {
  var request = require('supertest')('https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS}');
  var headers = {"Authorization": process.env.AUTH_SECRET};

  test('GET answers', function(done) {
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
});