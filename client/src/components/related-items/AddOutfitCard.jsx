import React, {useState, useEffect} from 'react';


const AddOutfitCard = ({sessionid, outfitProducts, setOutfitProducts, currentProduct}) => {

  const handleAdd = (e) => {
    console.log('added');
    if (!outfitProducts.hasOwnProperty(sessionid)) {
      setOutfitProducts((prevOutfitProducts) => ({
        ...prevOutfitProducts,
        [sessionid]: [currentProduct],
      }));
    } else {
      const isProductUnique = !outfitProducts[sessionid].includes(currentProduct);
      if (isProductUnique) {
        setOutfitProducts((prevOutfitProducts) => ({
          ...prevOutfitProducts,
          [sessionid]: [
            ...prevOutfitProducts[sessionid],
            currentProduct,
          ],
        }));
      }
    }
  };
  useEffect (() => {
    console.log('added sucessfully', currentProduct, outfitProducts)
  },[outfitProducts])

 // console.log('added', currentProduct, outfitProducts)


  return (
    <>

    <div className="card" onClick = {handleAdd} >

      <div className = 'card-details' >
        <img
          src="https://seekicon.com/free-icon-download/plus-circle-o_1.svg"
          width="250"
          height="250"
          alt="header image"
        />

    <span className = 'card-text' > Add to Outfit </span>

    </div>

    </div>
    </>
  )


}




export default AddOutfitCard;