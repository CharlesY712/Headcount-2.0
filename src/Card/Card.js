import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

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
          <span>: {Math.round(district.stats[year] * 100) / 100}</span>
        </li>
      );
    });
  };

  return (
    <div
      onClick={() => { displayComparedCards(district.location); }} 
      className={`card ${highlight} ${selected}`}>
      <h2 className='card-title'>{district.location}</h2>
      <ul className='card-list'>
        { cardData() }
      </ul>
    </div>
  );
};

Card.propTypes = {
  district: PropTypes.object,
  displayComparedCards: PropTypes.func,
  compareArray: PropTypes.array,
  selected: PropTypes.string
};

export default Card;
