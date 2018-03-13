import React, { Component } from 'react';
import './App.css';
import CardContainer from './CardContainer';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program.js';
// import PropTypes from 'prop-types';

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

  getData(stats) {
    const districtData = new DistrictRepository(stats);
    this.setState({
      districtStats: districtData
    });
  }

  render() {
    return (
      <div>
        <h1>Welcome to Headcount</h1>
        {this.state.districtStats &&
        <CardContainer data={this.state.districtStats}/>
        }
      </div>
    );
  }
}

// App.propTypes = {
//   // addIdea: PropTypes.func
// }

export default App;
