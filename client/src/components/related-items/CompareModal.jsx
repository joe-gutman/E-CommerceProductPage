// import React, { useState} from 'react';
// import Modal from 'react-modal';

// const CompareModal = ({isOpen, onRequestClose, name, features, currentProduct, currentFeatures}) => {
//   console.log(currentFeatures)


//   return (

//     <Modal  isOpen = {isOpen} onRequestClose = {onRequestClose} ariaHideApp={false} style={{
//       content: {
//         width: '800px',
//         height: '300px',
//         margin: 'auto',
//       },
//     }}>

//       <h3> Comparing </h3>

//       <h4 id= "selected-product-name"> {name} </h4>
//       <h4 id= "current-product-name">{currentProduct.name} </h4>

//       <div className = "comparison-modal">

//         {features.map((item, index) => (
//           <div key={index}>
//            {item.value} </div>
//         ))}

//         {currentFeatures.map((item1, index1) => (
//           <div key ={index1}>
//             {item1.value} </div>
//         ))}

//       </div>



//     </Modal>
//   )

// }



// export default CompareModal;

import React from 'react';
import Modal from 'react-modal';

const CompareModal = ({ isOpen, onRequestClose, name, features, currentProduct, currentFeatures }) => {
  console.log(currentFeatures);

  // Combine the features and currentFeatures into a single array
  const combinedFeatures = [...features, ...currentFeatures];

  // Create a Set to store unique characteristics
  const uniqueCharacteristics = new Set();

  // Iterate over the combined features and add unique characteristics to the Set
  combinedFeatures.forEach((item) => {
    uniqueCharacteristics.add(item.feature);
  });

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} ariaHideApp={false} style={{
      overlay: {
        backgroundColor: 'transparent', // Set overlay background color to a semi-transparent white
      },
      content: {
        width: '800px',
        height: '350px',
        margin: 'auto',
        background: 'white', // Set modal background to white
      },
    }}>
      <h3>Comparing</h3>

      <div className="comparison-modal">

        <table>
          <thead>
            <tr>
              <th>{name}</th>
              <th>Characteristic</th>
              <th>{currentProduct.name}</th>
            </tr>
          </thead>
          <tbody>
            {Array.from(uniqueCharacteristics).map((characteristic, index) => {
  const feature = features.find((item) => item.feature === characteristic);
  const currentFeature = currentFeatures.find((item) => item.feature === characteristic);

  return (
    <tr key={index}>
      <td className="checkmark">{feature ? <span>&#10004;</span> : ''}</td>
      <td>
        {feature ? (
          feature.value ? `${feature.feature}: ${feature.value}` : feature.feature
        ) : (
          `${currentFeature.feature}: ${currentFeature.value}`
        )}
      </td>
      <td className="checkmark">{currentFeature ? <span>&#10004;</span> : ''}</td>
    </tr>
  );
})}
          </tbody>
        </table>
      </div>
    </Modal>
  );
}

export default CompareModal;



