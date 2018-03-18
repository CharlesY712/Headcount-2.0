import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'proptypes';
import './CompareContainer.css';

const CompareContainer = 
({compareArray, displayComparison, displayComparedCards}) => {
  const [first, second] = compareArray;
  const districtCards = compareArray.map((district, index) => {
    return <Card
      district={district}
      key={index}
      selected='selected'
      displayComparedCards={displayComparedCards}
    />;
  });

  const comparisonCard = (districtCard1, districtCard2) => {
    if (compareArray.length === 2) {
      let average = 
      displayComparison(districtCard1.location, districtCard2.location);
      return (
        <div className='compare-card'>
          <h2>{first.location}<br />
            <span className='compare-card-title'>{average[first.location]}
            </span>
          </h2>
          <h3 className='compare-card-percent'> Difference = {average.compared}
          </h3>
          <h2>{second.location}<br />
            <span className='compare-card-title'>{average[second.location]}
            </span>
          </h2>
        </div>
      );
    }
  };
  
  return (
    <div
      className='card-container'>
      {districtCards[0]}
      {comparisonCard(first, second)}
      {districtCards[1]}
    </div>
  );
};

CompareContainer.propTypes = {
  displayComparedCards: PropTypes.func,
  displayComparison: PropTypes.func,
  compareArray: PropTypes.array
};

export default CompareContainer;