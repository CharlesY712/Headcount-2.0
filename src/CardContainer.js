import React from 'react';
import Card from './Card';
import './CardContainer.css';

const CardContainer = ({stats}) => {
  const districtCards = stats.map((district, index) => {
    return <Card district={district} key={index}/>;
  });
  
  return (
    <div className='card-container'>
      {districtCards}
    </div>
  );
};

export default CardContainer;