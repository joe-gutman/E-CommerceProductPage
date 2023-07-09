import React, { useEffect } from 'react';

const ProductFactors = (props) => {

  return (<div id = 'product-characteristics' className = "sub-titles" role='product-factors'>
    <h3>Product Characteristics</h3>
    <div className = "product-factors">
    <div>Size: {props.factors.Size.value}</div>
    <div>Width: {props.factors.Width.value}</div>
    <div>Comfort: {props.factors.Comfort.value}</div>
    <div>Quality: {props.factors.Quality.value}</div>
    <div>Length: {props.factors.Length.value}</div>
    </div>
  </div>);
}

export default ProductFactors;