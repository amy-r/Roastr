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

// Some people would argue that you don't need
// to test a function as simple as mapStateToProps
// it's up to you, as a developer

// some common questions to help you decide:
// - is the application broken if the subject under test (SUT) has incorrect behavior?
// - will you know if the SUT has incorrect behavior even if you don't run the test? (e.g., will the app launch?)

// Personally, I'm at a maybe
// if you're using a strongly typed language (javascript is not a strongly typed language)
// I'd be at a no

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
