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

  it('should update state districtStats when getData is called', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true });
    wrapper.instance().getData();
    expect(wrapper.state('districtStats').length).toEqual(181);
  });

  it('should update state when findMatch is called', () => {
    const matches = 'colorado';
    wrapper.instance().findMatch(matches);
    expect(wrapper.state('districtStats').length).toEqual(2);
  });

  // it('should invoke findByName when displayComparedCards is invoked', () => {
  //   const mockFindByName = jest.fn();
  //   const mockEvent = { target: { closest: jest.fn().mockImplementation() } };
  //   wrapper.instance().displayComparedCards(mockEvent);
  //   expect(mockFindByName).toHaveBeenCalled();
  // });

  // it('should place card into compare array if length is less than two', () => {

  // });
});
