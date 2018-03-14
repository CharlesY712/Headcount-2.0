import React from 'react';
import Card from './Card';

const CardContainer = ({stats}) => {
  const districtCards = stats.map((district, index) => {
    return <Card district={district} key={index}/>;
  });
  
  return (
    <div>
      {districtCards}
    </div>
  );
};

export default CardContainer;