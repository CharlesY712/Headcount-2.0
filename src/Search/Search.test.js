import React from 'react';
import Search from './Search';
import { shallow } from 'enzyme';

describe('Search', () => {

  /* eslint-disable no-undef*/
  const mockFindMatch = jest.fn();
  /* eslint-enable no-undef*/

  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<Search findMatch={mockFindMatch}/>);
    instance = wrapper.instance();
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('updates state of location on handle change', () => {
    const mockEvent = {target: {value: 'abc'}};
    const expectedState = {location: 'abc'};

    instance.handleChange(mockEvent);
    expect(wrapper.state()).toEqual(expectedState);
  });

  it('should invoke findMatch on handle change', () => {
    const mockEvent = { target: { value: 'abc' } };
    instance.handleChange(mockEvent);
    expect(mockFindMatch).toHaveBeenCalled();
  });
  
  it('updates state of location on handleSubmit', () => {
    const expectedState = { location: '' };

    wrapper.setState({location: 'colorado'});
    expect(wrapper.state()).toEqual({location: 'colorado'});
    instance.handleSubmit();
    expect(wrapper.state()).toEqual(expectedState);
  });

  it('should invoke findMatch on handleSubmit', () => {
    instance.handleSubmit();
    expect(mockFindMatch).toHaveBeenCalled();
  });
});