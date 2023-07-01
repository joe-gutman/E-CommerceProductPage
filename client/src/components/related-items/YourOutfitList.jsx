import React, { useState, useEffect } from 'react';
import OutfitCard from './OutfitCard.jsx';
import NoImage from '../../assets/Image_not_available.png';
import AddImage from '../../assets/AddIconBlack.png';

const YourOutfitList = ({getAvgRating, currentProduct, currentProductStyles, currentProductAvgRating}) => {


  const initialOutfitList = JSON.parse(localStorage.getItem('outfitList')) || [];
  const [outfitProducts, setOutfitProducts] = useState(initialOutfitList);

  const handleAdd = () => {
    const isProductUnique = outfitProducts.every((product) => product[0].id !== currentProduct.id);
    if (isProductUnique) {
      const updatedOutfitProducts = [...outfitProducts, [currentProduct, currentProductStyles, { avgRating: currentProductAvgRating }]];
      setOutfitProducts(updatedOutfitProducts);
      localStorage.setItem('outfitList', JSON.stringify(updatedOutfitProducts));
    }
  };

  const handleClear = () => {
    setOutfitProducts([]);
    localStorage.removeItem('outfitList');
  };

  const handleRemove = (id) => {
    const updatedOutfitProducts = outfitProducts.filter((product, index) => product[0].id !== id);
    setOutfitProducts(updatedOutfitProducts);
    localStorage.setItem('outfitList', JSON.stringify(updatedOutfitProducts));
  }

  return (
    <>
      <div className = "wrapper" >
        <div className = 'box' id="outfit-box" >
        <button id= "add-outfit-button" onClick = {handleAdd} >
          <img id="add-outfit-button-image" src= {AddImage} width="60" height="60" alt="outfit image" />
          <h4 id="add-outfit-button-text"> Add to Outfit </h4>
        </button>
          <div className = "inner-box" >
            {Object.values(outfitProducts).map((product, index) => (
              <OutfitCard key={index} product={product[0]} id={product[0].id} name={product[0].name} category={product[0].category} price={product[0].default_price} image = {product[1].results[0].photos[0].url || NoImage} avgRating = {product[2].avgRating} handleRemove = {handleRemove} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default YourOutfitList;