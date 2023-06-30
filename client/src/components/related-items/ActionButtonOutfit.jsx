import React from 'react';

const ActionButtonOutfit = ({handleRemove, id}) => {

    return (
      <div className="action-button">
        <button onClick = {() => {handleRemove(id)}} > Remove (X) </button>
      </div>
    )
  }



export default ActionButtonOutfit;