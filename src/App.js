import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import CardContainer from './CardContainer';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program.js';
// import PropTypes from 'prop-types';

const district = new DistrictRepository(kinderData);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      districtStats: null
    };
  }

  componentDidMount() {
    this.getData(kinderData);
  }

  getData() {
    this.setState({
      districtStats: district.findAllMatches()
    });
  }

  findMatch = (input) => {
    const matches = district.findAllMatches(input);
    this.setState({
      districtStats: matches
    });
  }

  render() {
    return (
      <div>
        <h1>Welcome to Headcount</h1>
        <Search findMatch={this.findMatch}/>
        {this.state.districtStats &&
        <CardContainer stats={this.state.districtStats}/>
        }
      </div>
    );
  }
}

// App.propTypes = {
//   // addIdea: PropTypes.func
// }

export default App;
