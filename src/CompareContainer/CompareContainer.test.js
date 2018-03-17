import React from 'react';
import CompareContainer from './CompareContainer';
import { shallow } from 'enzyme';

describe('CompareContainer', () => {

  const mockArray = [
    {
      location: 'MEEKER RE1',
      stats:
        {
          '2004': 0,
          '2005': 0.505
        }
    }
  ];

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CompareContainer compareArray={mockArray} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});