import React from 'react';
import { render, within } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import App, {RelatedItems} from '../client/src/index.jsx';
require('dotenv').config();

// import ResizeObserver from './related-items-test-files/resizeObserverMock.js';
// import 'resize-observer-polyfill';

// jest.mock('./related-items-test-files/resizeObserverMock.js');

const { getByRole } = render(<App />);
const { getByRole: getChildByRole} = within(getByRole('product-page'));

var expectElementByRole = (testMessage, role) => {
  test(testMessage, () => {
    expect(within(getChildByRole(role))).toBeTruthy()
    // try{
    //   expect(within(getChildByRole(role))).toBeTruthy();
    // } catch {
    //   throw Error(`Expected component with role= '${role}' to exist`)
    // }
  })
}

/* --------------------------------- Viewing Product in Related List --------------------------- */
describe('Elements should exist for rendering list views with products', () => {
  // expectElementByRole('Users should have way to see displayed related product info', 'related-product-info')
  // expectElementByRole('Users should have way to learn about related products that may interest them', 'show-related-products')
  expectElementByRole('Users should have way to see details of related products', 'show-details-of-related-product')
  expectElementByRole('user-should-be-able-compare-products', 'user-should-be-able-compare-products')
})



// describe('RelatedItems', () => {

//   test('should render related items component with element with className box', () => {
//     const currentRelatedProducts = [1,2,3]
//     render(
//       <RelatedItems currentRelatedProducts={currentRelatedProducts} />
//     );
//     expect(document.querySelector('.box')).toBeInTheDocument();
//   }),


//   test('should renders the related items section with the given related products', () => {
//     const currentRelatedProducts = [1, 2, 3];
//     const { getByText } = render( // render func returns obj containing query functions like getByText,getByTestId. Using destructuring getting function and assign to variable
//       <RelatedItems currentRelatedProducts={currentRelatedProducts} />
//     );
//     const relatedItemsSection = getByText('Related Products'); //searches rendered component for text and returns matching element that contains text
//     expect(relatedItemsSection).toBeInTheDocument();
//   });

// });