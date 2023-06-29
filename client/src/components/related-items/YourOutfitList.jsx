import React, { useState } from 'react';
import OutfitCard from './OutfitCard.jsx';
import AddOutfitCard from './AddOutfitCard.jsx';


const YourOutfitList = ({getAvgRating, currentProduct}) => {

  var sessionid = JSON.stringify(document.cookie, undefined, "\t")
  const [outfitProducts, setOutfitProducts] = useState({});


  return (

    <>
    <div className = 'box' >
    <AddOutfitCard sessionid = {sessionid} outfitProducts = {outfitProducts} setOutfitProducts = {setOutfitProducts} currentProduct = {currentProduct} />

    {Object.values(outfitProducts).map((product, index) => (
      <OutfitCard key = {index} product = {product} id = {product.id} name = {product.name} category = {product.category} price = {product.default_price} avgRating = {product.avgRating} features = {product.features} image = {product.results[0].photos[0].url || "https://digitalfinger.id/wp-content/uploads/2019/12/no-image-available-icon-6.png"} />
    ))}


    </div>
    </>
  )


}




export default YourOutfitList;