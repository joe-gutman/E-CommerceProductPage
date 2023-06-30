import React, { useEffect } from 'react';

const ProductFactors = (props) => {

  return (<>
    <h4>Product Characteristics</h4>
    <div>Size: {props.factors.Size.value}</div>
    <div>Width: {props.factors.Width.value}</div>
    <div>Comfort: {props.factors.Comfort.value}</div>
    <div>Quality: {props.factors.Quality.value}</div>
    <div>Length: {props.factors.Length.value}</div>
  </>);
}

export default ProductFactors;