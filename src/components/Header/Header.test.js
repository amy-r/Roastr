import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './Header';
import { shallow } from 'enzyme';

describe('Header', () => {
  it('should exist', () => {
    const wrapper = shallow(<Header />)

    expect(wrapper).toMatchSnapshot();
  });

  it('should render three NavLinks for Home, Adding a Roaster, and Displaying Current Roasters', () => {
    const wrapper = shallow(<Header />)

    expect(wrapper.find('NavLink').length).toEqual(3)
  })
})