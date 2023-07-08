import React, { useState, useEffect} from 'react';

var BuyProduct = ({currentProduct, currentStyle}) => {
  var [sizes, setSizes] = useState(["small", "medium", "large", "xlarge", "xxlarge"]);
  var [quantities, setQuantities] = useState({small: 5, medium: 8, large: 0, xlarge: 4, xxlarge: 4});
  var [selectedSize, setSelectedSize] = useState(null);
  var [selectedQuantity, setSelectedQuantity] = useState(null);
  var [quantityOptions, setQuantityOptions] = useState(null);

  useEffect(() => {
    if (selectedSize === null || 0 || "-") {
      document.getElementById("add-to-cart").disabled = true;
    } else {
      document.getElementById("add-to-cart").disabled = false;
    }
  }, [selectedSize, selectedQuantity])

  return (
    <div id="buy-product">
      <select id="size-selector" onChange={(e) => setSelectedSize(e.target.value)}>
        <option value="select-size">Select Size</option>
          {sizes === null ? (
            <option value="OUT OF STOCK">OUT OF STOCK</option>
          ):(
            sizes.map((sku, index) => (
              <option value={sku} key={index}>
                {sku}
              </option>
            ))
          )}
      </select>

      <select id="quantity-selector" onChange={(e) => setSelectedQuantity(e.target.value)}>
        <option value="select-quantity">{selectedSize === null || 0 ? "Select Quantity" : "-"}</option>
        {quantityOptions ? (<></>):(
          Array(quantities[selectedSize]).fill().map((x,i)=>i + 1).map((amount, index) => (
            <option value={amount} key={index}>
              {amount}
            </option>
          ))
        )}
      </select>
      <button id="add-to-cart">Add to Cart</button>
    </div>
  )
}

export default BuyProduct;