import React from 'react';
import Card from './Card';
import './CardContainer.css';

const CardContainer = ({stats, displayComparedCards}) => {
  const districtCards = stats.map((district, index) => {
    return <Card 
      district={district} 
      key={index}
    />;
  });
  
  return (
    <div 
      onClick={displayComparedCards} className='card-container'>
      {districtCards}
    </div>
  );
};

export default CardContainer;