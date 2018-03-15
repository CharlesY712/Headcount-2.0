import React from 'react';
import Card from './Card';

const CompareContainer = ({compareArray, displayComparison}) => {
  const [first, second] = compareArray;
  const districtCards = compareArray.map((district, index) => {
    return <Card
      district={district}
      key={index}
    />;
  });

  const comparison = (districtCard1, districtCard2) => {
    if (compareArray.length === 2) {
      let average = displayComparison(districtCard1, districtCard2);
      return (
        <div>
          <h2>{first.location}<br />{average[first.location]}</h2>
          <h3>{average.compared}</h3>
          <h2>{second.location}<br />{average[second.location]}</h2>
        </div>
      );
    }
  };
  
  return (
    <div
      className='card-container'>
      {districtCards[0]}
      { comparison(first, second) }
      {districtCards[1]}
    </div>
  );
};

export default CompareContainer;