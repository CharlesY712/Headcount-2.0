import React from 'react';

const Card = ({district}) => {
  console.log('data', district);

  const cardData = () => {
    return Object.keys(district.stats).map((year, index) => {

      return (
        <li key={index}>{ year }
          <span>: {district.stats[year]}</span>
        </li>
      )
    })
  }

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
