import React from 'react';
import Overview  from '../client/src/components/Overview.jsx';
import MainImage  from '../client/src/components/overview/MainImage.jsx';
import {render, within, waitFor, fireEvent} from '@testing-library/react';
require('dotenv').config();

const fetchCurrentProduct = async () => {
  await new Promise(resolve => setTimeout(resolve, 500))
  var currentProduct = {
    "id": 40345,
    "campus": "hr-rfp",
    "name": "Bright Future Sunglasses",
    "slogan": "You've got to wear shades",
    "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
    "category": "Accessories",
    "default_price": "69.00",
    "created_at": "2021-08-13T14:38:44.509Z",
    "updated_at": "2021-08-13T14:38:44.509Z"
  };
  return currentProduct;
};

const fetchCurrentStyles = async () => {
  await new Promise(resolve => setTimeout(resolve, 500))
  var currentStyles = {
    "product_id": "40345",
    "results": [
        {
            "style_id": 240506,
            "name": "Black Lenses & Black Frame",
            "original_price": "69.00",
            "sale_price": null,
            "default?": false,
            "photos": [
                {
                    "thumbnail_url": null,
                    "url": null
                }
            ],
            "skus": {
                "null": {
                    "quantity": null,
                    "size": null
                }
            }
        },
        {
            "style_id": 240507,
            "name": "Black Lenses & Gold Frame",
            "original_price": "69.00",
            "sale_price": null,
            "default?": true,
            "photos": [
                {
                    "thumbnail_url": null,
                    "url": null
                }
            ],
            "skus": {
                "null": {
                    "quantity": null,
                    "size": null
                }
            }
        },
        {
            "style_id": 240508,
            "name": "Gold Lenses & Black Frame",
            "original_price": "69.00",
            "sale_price": null,
            "default?": false,
            "photos": [
                {
                    "thumbnail_url": null,
                    "url": null
                }
            ],
            "skus": {
                "null": {
                    "quantity": null,
                    "size": null
                }
            }
        },
        {
            "style_id": 240509,
            "name": "Gold Lenses & Gold Frame",
            "original_price": "69.00",
            "sale_price": null,
            "default?": false,
            "photos": [
                {
                    "thumbnail_url": null,
                    "url": null
                }
            ],
            "skus": {
                "null": {
                    "quantity": null,
                    "size": null
                }
            }
        }
    ]
  };
  return currentStyles;
};

var expectElementByRole = (testMessage, role) => {
  test(testMessage, async () => {

    const currentProduct = await fetchCurrentProduct();
    const currentProductStyles = await fetchCurrentStyles();

    const { getByRole } = render(<Overview currentProduct={currentProduct} currentProductStyles={currentProductStyles}/>);

    await waitFor(() => {
      expect(getByRole(role)).toBeTruthy();
      // try {
      // } catch {
      //   throw Error(`Expected component with role= '${role}' to exist`)
      // }
    })
  })
};



/* -------------------------- Viewing Product Test ------------------------- */
describe('Elements should exist for viewing product images', () => {
  expectElementByRole('Image View should exist for viewing product photos', 'product-photos');
  expectElementByRole('Carousel should exist for selecting a product image to view', 'select-product-photos');
  expectElementByRole('Product photo view should exist to view a selected product photo', 'view-selected-product-photo');
//   expectElementByRole('Current Product Photo should exist to view a selected product photo', 'current-product-photo');
//   expectElementByRole('Expanded Image View should exist for showing a larger view ', 'zoom-current-product-photo');
//   expectElementByRole('Zoom Image View should exist for zooming in on a currently select product photo', 'expand-current-product-photo');
});

/* ------------------------- Selecting Product Test ------------------------- */
// describe('Elements should exist for selecting a product', () => {
//   expectElementByRole('Style selector should exist for selecting a product style', 'select-product-style');
//   expectElementByRole('Checkmark should exist on style selector to indicate shown style', 'current-selected-style-checkmark');
//   expectElementByRole('Dropdown menu should exist for selecting product size', 'select-product-size');
// });

/* --------------------------- Buying Product Test -------------------------- */
// describe('Elements should exist for buying a product', () => {
//   expectElementByRole('Dropdown menu should exist for selecting how many items to buy', 'select-quantity-of-product');
//   expectElementByRole('"Add to Cart" button should exist for adding item to cart', 'add-product-to-cart');
// });

/* ------------------------ Product Information Tests ----------------------- */
// describe('Elements should exist for showing product information', () => {
//   expectElementByRole('Product Name should exist', 'product-name');
//   expectElementByRole('Product category should exist', 'product-category');
//   expectElementByRole('Product description should exist', 'product-description');
//   expectElementByRole('Product price should exist', 'product-price');
//   expectElementByRole('Product rating should exist', 'product-rating');
// });

/* ----------------------- Social Media Sharing Tests ----------------------- */
// describe('Elements should exist for social media sharing', () => {
//   expectElementByRole('Share on social media buttons should exist', 'share-on-social-media');
//   expectElementByRole('Should include share on Facebook social media button', 'share-on-facebook');
//   expectElementByRole('Should include share on Twitter social media button', 'share-on-twitter');
//   expectElementByRole('Should include share on Pinterest social media button', 'share-on-pinterest');
// });



