import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = ({stats, displayComparedCards, compareArray}) => {
  const districtCards = stats.map((district, index) => {
    return <Card 
      district={district} 
      key={index}
      displayComparedCards={displayComparedCards}
      compareArray={compareArray}
    />;
  });
  
  return (
    <div className='card-container'>
      {districtCards}
    </div>
  );
};

export default CardContainer;