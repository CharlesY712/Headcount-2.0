import React, { Component } from 'react';
import './Search.css';
import PropTypes from 'prop-types';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    };
  }
  
  handleChange = (event) => {
    this.setState({location: event.target.value});
    this.props.findMatch(event.target.value);
  }

  handleSubmit = () => {
    this.setState({location: ''});
    this.props.findMatch();
  }

  render() {
    return (
      <div className= 'search-bar'>
        <input 
          className='search-input'
          type='text'
          placeholder='Search Districts'
          value={this.state.location}
          onChange={this.handleChange}
        />
        <button 
          className='clear-button'
          type='submit'
          onClick={this.handleSubmit}
        >Clear</button>
        <p className='description'>Select two districts by clicking their card
        to see the comparison of kindergartners in full day programs. </p>
      </div>
    );
  }
}

Search.propTypes = {
  findMatch: PropTypes.func
};

export default Search;
