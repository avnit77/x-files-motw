import React from 'react';
import { shallow } from 'enzyme';
import MonsterList from './MonsterList';

describe('MonsterList component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<MonsterList />);
    expect(wrapper).toMatchSnapshot();
  });
});
