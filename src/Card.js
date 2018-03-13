import React from 'react';
import './Card.css';

const Card = ({district}) => {

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
    <div>
      <h2>{district.location}</h2>
      <ul>
        { cardData() }
      </ul>
    </div>
  )
}

export default Card;
