import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    };
  }
  
  handleChange = (event) => {
    this.setState({location: event.target.value.toUpperCase()});
    this.props.findMatch(event.target.value);
  }

  render() {
    return (
      <div>
        <input 
          type='text'
          placeholder='Search location'
          value={this.state.location}
          onChange={this.handleChange}
        />
        <button 
          type='submit'
        >Clear</button>
      </div>
    );
  }
}

export default Search;
