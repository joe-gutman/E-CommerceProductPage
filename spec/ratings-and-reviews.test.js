import 'jest-expect-message';
import React from 'react';
import RatingsAndReviews from '../client/src/components/RatingsAndReviews.jsx';
import {render, within} from '@testing-library/react';
require('dotenv').config();

const { getByRole }  = render(<RatingsAndReviews />);
const { getByRole: getChildByRole } = within(getByRole('review-section'));

var expectElementByRole = (testMessage, role) => {
  test(testMessage, () => {
    try{
      expect(within(getChildByRole(role))).toBeTruthy();
    } catch {
      throw Error(`Expected component with role='${role}' to exist`)
    }
  });
};

describe('Elements should exist for viewing review information', () => {
  expectElementByRole('Review Breakdown should exist', 'review-breakdown');
  expectElementByRole('Review List should exist', 'review-list');
  expectElementByRole('Add Review Button should exist', 'add-review');
  expectElementByRole('Product Factors should exist', 'product-factors');
});