import React from 'react';
import App, {Overview } from '../client/src/index.jsx';
import {render, within} from '@testing-library/react';
require('dotenv').config();

const { getByRole }  = render(<Overview />);
const { getByRole: getChildByRole } = within(getByRole('product-information'));

var expectElementByRole = (testMessage, role) => {
  test(testMessage, () => {
    try{
      expect(within(getChildByRole(role))).toBeTruthy();
    } catch {
      throw Error(`Expected component with role='${role}' to exist`)
    }
  });
};


/* -------------------------- Viewing Product Test ------------------------- */
describe('Elements should exist for viewing product images', () => {
  expectElementByRole('Image View should exist for viewing product photos', 'product-photos');
  expectElementByRole('Carousel should exist for selecting a product image to view', 'select-product-photos');
  expectElementByRole('Product photo view should exist to view a selected product photo', 'view-selected-product-photo');
  expectElementByRole('Current Product Photo should exist to view a selected product photo', 'current-product-photo');
  expectElementByRole('Expanded Image View should exist for showing a larger view ', 'expand-current-product-photo');
  expectElementByRole('Zoom Image View should exist for zooming in on a currently select product photo', 'expand-current-product-photo');
});

/* ------------------------- Selecting Product Test ------------------------- */
describe('Elements should exist for selecting a product', () => {
  expectElementByRole('Style selector should exist for selecting a product style', 'select-product-style');
  expectElementByRole('Checkmark should exist on style selector to indicate shown style', 'current-selected-style-checkmark');
  expectElementByRole('Dropdown menu should exist for selecting product size', 'select-product-size');
});

/* --------------------------- Buying Product Test -------------------------- */
describe('Elements should exist for buying a product', () => {
  expectElementByRole('Dropdown menu should exist for selecting how many items to buy', 'select-quantity-of-product');
  expectElementByRole('"Add to Cart" button should exist for adding item to cart', 'add-product-to-cart');
});

/* ------------------------ Product Information Tests ----------------------- */
describe('Elements should exist for showing product information', () => {
  expectElementByRole('Product Name should exist', 'product-name');
  expectElementByRole('Product category should exist', 'product-category');
  expectElementByRole('Product description should exist', 'product-description');
  expectElementByRole('Product price should exist', 'product-price');
  expectElementByRole('Product rating should exist', 'product-rating');
});

/* ----------------------- Social Media Sharing Tests ----------------------- */
describe('Elements should exist for social media sharing', () => {
  expectElementByRole('Share on social media buttons should exist', 'share-on-social-media');
  expectElementByRole('Should include share on Facebook social media button', 'share-on-facebook');
  expectElementByRole('Should include share on Twitter social media button', 'share-on-twitter');
  expectElementByRole('Should include share on Pinterest social media button', 'share-on-pinterest');
});



