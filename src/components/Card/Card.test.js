import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Card />)

    expect(wrapper).toMatchSnapshot();
  })
})

