import React, { useEffect } from 'react';
import Modal from 'react-modal';

const CompareModal = ({ isOpen, onRequestClose, name, features = [], currentProduct =[], currentProductFeatures =[], index }) => {
  // Combine the features and currentProductFeatures into a single array
  var combinedFeatures = [...features, ...currentProductFeatures];

  // Create an array to store unique characteristics
  const uniqueCharacteristics = [];

  // Iterate over the combined features and add unique characteristics to the array
  combinedFeatures.forEach((item) => {
    const { feature, value } = item;
    const existingCharacteristic = uniqueCharacteristics.find(
      (characteristic) => characteristic.feature === feature && characteristic.value === value
    );

    if (!existingCharacteristic) {
      uniqueCharacteristics.push({ feature, value });
    }
  });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      style={{
        overlay: { backgroundColor: 'transparent' },
        content: {
          width: '800px',
          height: '350px',
          margin: 'auto',
          background: 'white',
        },
      }}
    >
      <h3>Comparing</h3>

      <div className="comparison-modal" >
        <table>
          <thead>
            <tr>
              <th>{name}</th>
              <th></th>
              <th> {currentProduct.name} </th>
            </tr>
          </thead>
          <tbody>
            {uniqueCharacteristics.map((characteristic, index) => {
              const { feature, value } = characteristic;

              // Find the selected product feature object that matches the current characteristic
              const featureItem = features.find((item) => item.feature === feature && item.value === value);

              // Find the currentProductFeature object that matches the current characteristic
              const currentProductFeature = currentProductFeatures.find(
                (item) => item.feature === feature && item.value === value
              );

              return (
                <tr key={index}>
                  <td className="checkmark">
                    {/* Display a checkmark if the feature exists */}
                    {featureItem ? <span>&#10004;</span> : ''}
                  </td>
                  <td>
                    {/* Display the feature value or the currentProductFeature value */}
                    {featureItem ? (
                      featureItem.value ? (
                        <>{featureItem.feature}: {featureItem.value}</>
                      ) : (
                        featureItem.feature
                      )
                    ) : currentProductFeature ? (
                      currentProductFeature.value ? (
                        <>{currentProductFeature.feature}: {currentProductFeature.value}</>
                      ) : (
                        currentProductFeature.feature
                      )
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="checkmark">
                    {/* Display a checkmark if the currentProductFeature exists */}
                    {currentProductFeature ? <span>&#10004;</span> : ''}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Modal>
  );
};

export default CompareModal;
