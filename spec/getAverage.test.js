import {App, getAvgRating} from '../client/src/index.jsx';

describe('Test average product rating', () => {
  describe('Should return a number', () => {
    var expected = 1;
    var actual = getAvgRating({1: "0", 2: "1", 3: "0", 4: "0", 5: "0"});
    test(`average rating ${actual} should ${expected}`, () => {
      expect(typeof actual).toBe('number');
    })
  });

  describe('When given no ratings, return 0', () => {
    var expected = 0;
    var actual = getAvgRating({1: "0", 2: "0", 3: "0", 4: "0", 5: "0"});
    test(`average rating ${actual} to equal ${expected}`, () => {
      expect(actual).toBe(expected);
    })
  });

  describe('When given an empty object, return 0', () => {
    var expected = 0;
    var actual = getAvgRating({});
    test(`average rating ${actual} to equal ${expected}`, () => {
      expect(actual).toBe(expected);
    })
  });

  describe('Average rating should calculate correctly', () => {
    var expected = 3;
    var actual = getAvgRating({1: "1", 2: "1", 3: "1", 4: "1", 5: "1"});
    test(`average rating ${actual} to equal ${expected}`, () => {
      expect(actual).toBe(expected);
    })

    expected = 3.25;
    actual = getAvgRating({1: "1", 2: "4", 3: "8", 4: "10", 5: "1"});
    test(`average rating ${actual} to equal ${expected}`, () => {
      expect(actual).toBe(expected);
    })
  });
});