import React from 'react';
import Card from './Card';

const CardContainer = ({data}) => {
  const keys = Object.keys(data.stats);
  // console.log(keys);

  const districtCards = keys.map((district, index) => {
  return <Card district={data.stats[district]} key={index}/>
});
  

  return (
    <div>
      {districtCards}
    </div>
  )
}

export default CardContainer;