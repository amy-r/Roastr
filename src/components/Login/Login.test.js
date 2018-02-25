import React from 'react';
import ReactDOM from 'react-dom';
import { Login, mapStateToProps, mapDispatchToProps } from './Login';
import { shallow } from 'enzyme';

describe('Login', () => {
  it('should exist', () => {
    const mockUser = {
      userName: 'Jordan',
      userEmail: 'Jordan@Project.com',
      userPhoto: 'photo-url',
      userId: 'fancy encryption'
    }

    const wrapper = shallow(<Login user={mockUser}/>, {disableLifecycleMethods:true});
    
    expect(wrapper).toMatchSnapshot();
  })
})

describe('MSTP and MDTP', () => {
  it('should define user props for the container', () => {
    const userName= "David Bowie";
    const userEmail= "david@gmail.com";
    const mockStore = {user: [ {name, userEmail} ]};
    const expected = [ {name, userEmail} ];
    const mapped = mapStateToProps(mockStore);
    expect(mapped.user).toEqual(expected)
  })
})