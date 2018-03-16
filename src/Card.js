import React from 'react';
import './Card.css';

const Card = ({district, displayComparedCards, compareArray}) => {
  // const isSelected = compareArray.some(stats => {
  //   console.log(stats)
  //   return stats.location === district.location;
  // });
  // const highlight = isSelected ? 'selected': '';
  const cardData = () => {
    return Object.keys(district.stats).map((year, index) => {
      const indicator = district.stats[year] > 0.5 ? 'greaterThan' : 'lessThan';
      return (
        <li className={indicator} key={index}>{ year }
          <span>: {Math.round(district.stats[year] * 100)/100}</span>
        </li>
      );
    });
  };

  return (
    <div
      onClick={displayComparedCards} 
      className={`card `}>
      <h2 className='card-title'>{district.location}</h2>
      <ul className='card-list'>
        { cardData() }
      </ul>
    </div>
  );
};

export default Card;
