import React from 'react';
import CardContainer from './CardContainer';
import { shallow, mount } from 'enzyme';

describe('CardContainer', () => {

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
    wrapper = shallow(<CardContainer stats = {mockArray}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});