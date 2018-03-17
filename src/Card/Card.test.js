import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  const mockObject = {
    location: 'MEEKER RE1',
    stats:
      {
        '2004': 0,
        '2005': 0.505
      }
  };
  /* eslint-disable no-undef*/
  const mockFunction = jest.fn();
  /* eslint-enable no-undef*/

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card 
      displayComparedCards={mockFunction} 
      district={mockObject}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a class of greaterThan if the percentage is above .5', () => {
    expect(wrapper.find('.greaterThan').length).toEqual(1);
  });

  it('should invoke the display compared cards function on click', () => {
    const districtCard = wrapper.find('.card');
    districtCard.simulate('click');
    expect(mockFunction).toHaveBeenCalled();
  });
});