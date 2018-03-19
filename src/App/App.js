import React, { Component } from 'react';
import './App.css';
import Search from '../Search/Search';
import CardContainer from '../CardContainer/CardContainer';
import CompareContainer from '../CompareContainer/CompareContainer';
import DistrictRepository from '../helper';
import kinderData from '../data/kindergartners_in_full_day_program.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      districtStats: [],
      compareArray: []
    };

    this.district = new DistrictRepository(kinderData);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    this.setState({
      districtStats: this.district.findAllMatches()
    });
  }

  findMatch = (input) => {
    const districtStats = this.district.findAllMatches(input);
    this.setState({districtStats});
  }

  addToCompareArray = (location) => {
    const selectedCard = this.district.findByName(location);
    if (this.state.compareArray.length < 2) {
      this.setState({
        compareArray: [...this.state.compareArray, selectedCard]
      });
    }
  }

  removeFromCompareArray = (location) => {
    const found = 
    this.state.compareArray.find(stat => stat.location === location);
    if (found) {
      const filtered =
        this.state.compareArray.filter(stats => stats.location !== location);
      this.setState({
        compareArray: filtered
      });
    }
  }

  displayComparedCards = (location) => {
    this.addToCompareArray(location);
    this.removeFromCompareArray(location);
  }

  render() {
    const { compareArray, districtStats } = this.state;
    return (
      <div>
        <h1 className='title'>Welcome to Headcount</h1>
        <Search findMatch={this.findMatch}/>
        {districtStats &&
        <div>
          <CompareContainer 
            compareArray={compareArray}
            displayComparison={this.district.compareDistrictAverages}
            displayComparedCards={this.displayComparedCards}
          />
          <CardContainer 
            stats={districtStats}
            displayComparedCards={this.displayComparedCards}
            compareArray={compareArray}
          />
        </div>
        }
      </div>
    );
  }
}

export default App;
