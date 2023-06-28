import getAvgRating from '../client/src/index.jsx';

var actualRating = getAvgRating({1: "1", 2: "1", 3: "1", 4: "1", 5: "1"});
var expectedRating = 3;
test(`average rating ${actualRating} to equal ${expectedRating}`, () => {
  expect(actualRating).toBe(expectedRating);
});

var actualRating = getAvgRating({1: "1", 2: "4", 3: "8", 4: "10", 5: "1"});
var expectedRating = 3.25;
test(`average rating ${actualRating} to equal ${expectedRating}`, () => {
  expect(actualRating).toBe(expectedRating);
});