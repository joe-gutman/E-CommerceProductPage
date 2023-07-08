import React, {useState, useEffect} from 'react';
import ShareButtons from './ShareButton.jsx';
import BuyProduct from './BuyProduct.jsx';
import SelectStyle from './SelectStyle.jsx';
import StarDisplay from '../shared-components/StarDisplay.jsx';
import { getAvgRating } from '../../index.jsx';

const axios = require('axios');

var ProductInformation = ({currentProduct, currentProductStyles, currentStyle, setCurrentStyle}) => {
  var [productTitle, setProductTitle] = useState(currentProduct.name);
  var [productCategory, setProductCategory] = useState(currentProduct.category);
  var [productPrice, setProductPrice] = useState(currentProduct.default_price);
  var [productSalePrice, setProductSalePrice] = useState(0);
  var [productDescription, setProductDescription] = useState(currentProduct.description);
  var [currentAvgRating, setCurrentAvgRating] = useState(null);
  var [amountOfReviews, setAmountOfReviews] = useState(null);


  useEffect(() => {
    setProductTitle(currentProduct.name);
    setProductCategory(currentProduct.category);
    setProductPrice(currentProduct.default_price);
    setProductDescription(currentProduct.description);

    if (currentProductStyles.results) {
      setCurrentStyle(currentProductStyles.results[0]);
    }

    var axiosHeaders = {headers:{"Authorization" : process.env.AUTH_SECRET}};

    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS}/reviews/meta?product_id=${currentProduct.id}`, axiosHeaders)
      .then((response) => {
        setCurrentAvgRating(getAvgRating(response.data.ratings));
        setAmountOfReviews(Number(response.data.recommended.true) + Number(response.data.recommended.false));
      });
  }, [currentProduct])

  useEffect(() => {
    if(currentStyle !== null) {
      setProductSalePrice(currentStyle.sale_price);
    }
    // console.log('sale price:', currentStyle.sale_price)
    console.log('style:',currentStyle);
  }, [currentStyle]);

  return (
    <div id="product-information">
      <div id="product-info-header">
        <span id="product-title">
          <h2 id="product-name" role="product-name">{productTitle}</h2>
          <span id="product-category-rating">
            <h4 id="product-category"  role="product-category">Category:{productCategory}</h4>
            <StarDisplay name="product-stars" size={25} rating={currentAvgRating}/>
            <h4 id="amount-of-reviews">{amountOfReviews}</h4>
          </span>
        </span>
        <span id="product-price" role="product-price">
          {!productSalePrice ? (<h1 id="product-price"> ${productPrice}</h1>) : (
            <><h1 id="product-price" style={{textDecoration: "line-through"}}>${productPrice}</h1>
            <h1 id="product-sale-price"> ${productSalePrice}</h1></>)}
        </span>
      </div>
      <div id="product-info-body">
        <p id="product-description" role="product-description">{productDescription}</p>

      </div>
      <div id="product-info-footer">
        <span id="share-social" role="share-on-social-media">
          <ShareButtons currentProduct={currentProduct}/>
        </span>
        <BuyProduct currentProduct={currentProduct} currentStyle={currentStyle}/>
        <SelectStyle currentProductStyles={currentProductStyles} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle} />
      </div>
    </div>
  )
}

export default ProductInformation;
