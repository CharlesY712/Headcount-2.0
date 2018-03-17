import React from 'react';
import Search from './Search';
import { shallow } from 'enzyme';

describe('Search', () => {

  /* eslint-disable no-undef*/
  const mockFindMatch = jest.fn();
  /* eslint-enable no-undef*/

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search findMatch={mockFindMatch}/>);
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

    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state()).toEqual(expectedState);
  });

  it('should invoke findMatch on handle change', () => {
    const mockEvent = { target: { value: 'abc' } };
    wrapper.instance().handleChange(mockEvent);
    expect(mockFindMatch).toHaveBeenCalled();
  });
  
  it('updates state of location on handleSubmit', () => {
    const expectedState = { location: '' };

    wrapper.setState({location: 'colorado'});
    expect(wrapper.state()).toEqual({location: 'colorado'});
    wrapper.instance().handleSubmit();
    expect(wrapper.state()).toEqual(expectedState);
  });

  it('should invoke findMatch on handleSubmit', () => {
    wrapper.instance().handleSubmit();
    expect(mockFindMatch).toHaveBeenCalled();
  });
});