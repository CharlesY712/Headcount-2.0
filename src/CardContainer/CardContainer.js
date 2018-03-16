import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';
import PropTypes from 'prop-types';

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

CardContainer.propTypes = {
  stats: PropTypes.array,
  displayComparedCards: PropTypes.func,
  compareArray: PropTypes.array
};

export default CardContainer;