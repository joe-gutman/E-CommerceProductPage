import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
require('dotenv').config();
import RelatedItems from '../client/src/components/RelatedItems.jsx';
// import ResizeObserver from './related-items-test-files/resizeObserverMock.js';
// import 'resize-observer-polyfill';

// jest.mock('./related-items-test-files/resizeObserverMock.js');


describe('RelatedItems', () => {

  test('should render related items component with element with className box', () => {
    const currentRelatedProducts = [1,2,3]
    render(
      <RelatedItems currentRelatedProducts={currentRelatedProducts} />
    );
    expect(document.querySelector('.box')).toBeInTheDocument();
  }),


  test('should renders the related items section with the given related products', () => {
    const currentRelatedProducts = [1, 2, 3];
    const { getByText } = render( // render func returns obj containing query functions like getByText,getByTestId. Using destructuring getting function and assign to variable
      <RelatedItems currentRelatedProducts={currentRelatedProducts} />
    );
    const relatedItemsSection = getByText('Related Products'); //searches rendered component for text and returns matching element that contains text
    expect(relatedItemsSection).toBeInTheDocument();
  });

});