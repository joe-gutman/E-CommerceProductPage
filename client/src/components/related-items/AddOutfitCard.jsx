import React, {useState, useEffect} from 'react';


const AddOutfitCard = ({handleAdd}) => {


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