import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state', () => {
    const wrapper = shallow(<App />, {disableLifecycleMethods: true});
    expect(wrapper.state('districtStats')).toEqual(null);
    expect(wrapper.state('compareArray')).toEqual([]);
    expect(wrapper.state('compareStats')).toEqual({});
  });

  it('should update state when getData is called', () => {
    
  });

  it('should update state when findMatch is called', () => {
   
  });
});
