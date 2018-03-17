import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import DistrictRepository from '../helper';
import kinderData from '../data/kindergartners_in_full_day_program.js';

describe('App', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<App />);
    instance = wrapper.instance();
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

  it('should update state districtStats when getData is called', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true });
    const expectedState = new DistrictRepository(kinderData).findAllMatches();
    wrapper.instance().getData();
    expect(wrapper.state('districtStats')).toEqual(expectedState);
  });

  it('should update state when findMatch is called', () => {
    const input = 'colorado';
    const expectedState = 
    new DistrictRepository(kinderData).findAllMatches(input);
    instance.findMatch(input);
    expect(wrapper.state('districtStats')).toEqual(expectedState);
  });

  it('should add cards to compare array', () => {
    const location = 'colorado';
    instance.addToCompareArray(location);
    expect(wrapper.state('compareArray').length).toEqual(1);

  });

  it('should not add cards to compare array if length is > 2', () => {
    wrapper.setState({
      compareArray: [{}, {}]
    });
    const location = 'colorado';
    instance.addToCompareArray(location);
    expect(wrapper.state('compareArray').length).toEqual(2);

  });

  it('should remove card from compare array', () => {
    wrapper.setState({
      compareArray: [{location: 'COLORADO'}]
    });
    const location = 'COLORADO';
    instance.removeFromCompareArray(location);
    expect(wrapper.state('compareArray').length).toEqual(0);
  });

  it('should display the compared cards', () => {
    const location = 'colorado';
    /* eslint-disable no-undef*/
    instance.addToCompareArray = jest.fn();
    instance.removeFromCompareArray = jest.fn();
    /* eslint-enable no-undef*/
    instance.displayComparedCards(location);
    expect(instance.addToCompareArray).toHaveBeenCalledWith(location);
    expect(instance.removeFromCompareArray).toHaveBeenCalledWith(location);
  });
});
