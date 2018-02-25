import React from 'react';
import ReactDOM from 'react-dom';
import { Header, mapStateToProps } from './Header';
import { shallow } from 'enzyme';

describe('Header', () => {
  it('should exist', () => {
    const wrapper = shallow(<Header />)

    expect(wrapper).toMatchSnapshot();
  });

  it('should render two NavLinks for Home, and Displaying Current Roasters', () => {
    const wrapper = shallow(<Header />)

    expect(wrapper.find('NavLink').length).toEqual(2)
  })
})

describe('MSTP', () => {
  it('should define user props for the container', () => {
    const userName= "Ziggy Stardust";
    const userEmail= "ziggy@gmail.com";
    const mockStore = {user: [ {name, userEmail} ]};
    const expected = [ {name, userEmail} ];
    const mapped = mapStateToProps(mockStore);
    expect(mapped.user).toEqual(expected)
  })
})