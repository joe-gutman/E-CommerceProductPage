import React, { useState } from 'react';
import OutfitCard from './OutfitCard.jsx';


const YourOutfitList = () => {


  return (

    <>
    <div className="box">
    <section>
    <img
      src="https://seekicon.com/free-icon-download/plus-circle-o_1.svg"
      width="150"
      height="150"
      alt="header image"
    />
    <br></br> <br></br>

    Add to Outfit
    </section>


    <OutfitCard />
    <OutfitCard />
    </div>
    </>
  )


}




export default YourOutfitList;