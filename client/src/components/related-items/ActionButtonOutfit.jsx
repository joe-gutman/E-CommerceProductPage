import React from 'react';
import XButton from '../../assets/icons8-x-black.png';

const ActionButtonOutfit = ({handleRemove, id}) => {

    return (
      <div className="action-button-div" role = "allow-add-outfit-product">
        <button className="action-button-click" onClick = {() => {handleRemove(id)}} > <img src = {XButton} width="15"
            height="15" /> </button>
      </div>
    )
  }


export default ActionButtonOutfit;