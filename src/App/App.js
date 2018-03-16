import React, { Component } from 'react';
import './App.css';
import Search from '../Search/Search';
import CardContainer from '../CardContainer/CardContainer';
import CompareContainer from '../CompareContainer/CompareContainer';
import DistrictRepository from '../helper';
import kinderData from '../data/kindergartners_in_full_day_program.js';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      districtStats: null,
      compareArray: [],
      compareStats: {}
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
    const matches = this.district.findAllMatches(input);
    this.setState({
      districtStats: matches
    });
  }

  displayComparedCards = (event) => {
    const location = event.target.closest('.card').firstChild.innerText;
    const selectedCard = this.district.findByName(location);
    const found = 
    this.state.compareArray.find(stat => stat.location === location);
    
    if (this.state.compareArray.length < 2) {
      this.setState({
        compareArray: [...this.state.compareArray, selectedCard]
      });
    }
    
    if (found) {
      const filtered = 
      this.state.compareArray.filter(stats =>  stats.location !== location);
      this.setState({
        compareArray: filtered
      });
    }

  }

  displayComparison = (name1, name2) => {
    const comparedStats = 
    this.district.compareDistrictAverages(name1.location, name2.location);
    return comparedStats;
  }

  render() {
    return (
      <div>
        <h1>Welcome to Headcount</h1>
        <Search findMatch={this.findMatch}/>
        {this.state.districtStats &&
        <div>
          <CompareContainer 
            compareArray={this.state.compareArray}
            displayComparison={this.displayComparison}
            displayComparedCards={this.displayComparedCards}
          />
          <CardContainer 
            stats={this.state.districtStats}
            displayComparedCards={this.displayComparedCards}
            compareArray={this.state.compareArray}
          />
        </div>
        }
      </div>
    );
  }
}

App.propTypes = {
  addIdea: PropTypes.func
};

export default App;
