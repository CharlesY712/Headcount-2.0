import React from 'react';
import './Card.css';

const Card = ({district, displayComparedCards, compareArray, selected}) => {
  let isSelected;
  if (compareArray) {
    isSelected = compareArray.find(stats => {
      return stats.location === district.location;
    });
  }
  const highlight = isSelected ? 'selected': '';
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
      className={`card ${highlight} ${selected}`}>
      <h2 className='card-title'>{district.location}</h2>
      <ul className='card-list'>
        { cardData() }
      </ul>
    </div>
  );
};

export default Card;
