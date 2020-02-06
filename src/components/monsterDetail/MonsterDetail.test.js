import React from 'react';
import { shallow } from 'enzyme';
import MonsterDetail from './MonsterDetail';

describe('MonsterDetail component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<MonsterDetail match={{ params: {
      id: '1'
    } }}/>);
    expect(wrapper).toMatchSnapshot();
  });
});