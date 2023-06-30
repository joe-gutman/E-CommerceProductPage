import React, { useState, useEffect } from 'react';
import OutfitCard from './OutfitCard.jsx';
import AddOutfitCard from './AddOutfitCard.jsx';


const YourOutfitList = ({getAvgRating, currentProduct, currentProductStyles, currentProductAvgRating}) => {

  var sessionid = JSON.stringify(document.cookie, undefined, "\t")
  const [outfitProducts, setOutfitProducts] = useState({});


  const handleAdd = (e) => {

    if (!outfitProducts.hasOwnProperty(sessionid)) {
      setOutfitProducts((prevOutfitProducts) => ({
        ...prevOutfitProducts,
        [sessionid]: [currentProduct, currentProductStyles, {avgRating: currentProductAvgRating}],
      }));
    } else {
      const isProductUnique = !outfitProducts[sessionid].includes(currentProduct);
      if (isProductUnique) {
        setOutfitProducts((prevOutfitProducts) => ({
          ...prevOutfitProducts,
          [sessionid]: [
            ...prevOutfitProducts[sessionid],
            currentProduct, currentProductStyles, {avgRating:currentProductAvgRating},
          ],
        }));
      }
    }

  };


  return (

    <>
    <div className = "wrapper" >
    <div className = 'box' >
    <button id= "add-outfit-button" onClick = {handleAdd} > Add to Outfit </button>
    {/* <AddOutfitCard sessionid = {sessionid} outfitProducts = {outfitProducts} setOutfitProducts = {setOutfitProducts} currentProduct = {currentProduct} handleAdd = {handleAdd} /> */}

    {Object.values(outfitProducts).map((product, index) => (
      <OutfitCard key={index} product={product[0]} id={product[0].id} name={product[0].name} category={product[0].category} price={product[0].default_price} image = {product[1].results[0].photos[0].url || "https://digitalfinger.id/wp-content/uploads/2019/12/no-image-available-icon-6.png"} avgRating = {product[2].avgRating} />
    ))}

    </div>
    </div>
    </>
  )


}




export default YourOutfitList;