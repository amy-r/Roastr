/* eslint-disable */

import React from 'react';
import { Login, mapStateToProps, mapDispatchToProps, signOut } from './Login';
import { shallow, mount } from 'enzyme';
import * as firebase from 'firebase';
import * as firebaseFunctions from '../../Utilities/firebaseFunctions'
require('jest-localstorage-mock');

describe('Login', () => {
  let wrapper;
  let mockUser;

  beforeEach(()=> {
    mockUser = {
      userName: 'Jordan',
      userEmail: 'Jordan@Project.com',
      userPhoto: 'photo-url',
      userId: 'fancy encryption'
    }

    wrapper = mount(<Login logOut={jest.fn()} user={mockUser} logIn={jest.fn()}/>);
    
    firebase.auth().onAuthStateChanged= jest.fn().mockImplementation( (user) => {
      localStorage.setItem('user', user);
      wrapper.props().logIn();
      firebaseFunctions.writeUserData = jest.fn();
      firebaseFunctions.writeUserData();
    })
  })

  it('should render correctly with a user', () => {
    wrapper = shallow(<Login logOut={jest.fn()} user={mockUser} logIn={jest.fn()}/>, {disableLifecycleMethods:true});
    expect(wrapper).toMatchSnapshot();
  })

  it('should render correctly without a user', () => {

    wrapper = shallow(<Login logOut={jest.fn()} user={{}} logIn={jest.fn()}/>, {disableLifecycleMethods:true});
    expect(wrapper).toMatchSnapshot();
  })

  it('should set a user in localStorage on componentDidMount', async () => {
    firebase.auth().onAuthStateChanged(mockUser);

    expect(localStorage.setItem).toHaveBeenCalledWith('user', mockUser)
  })

  it('should call logIn when given a user on componentDidMount', () => {
    firebase.auth().onAuthStateChanged(mockUser);
    expect(wrapper.props().logIn).toHaveBeenCalled;
  })

  it('should call writeUserData when given a user on componentDidMount', () => {
    firebase.auth().onAuthStateChanged(mockUser);
    expect(firebaseFunctions.writeUserData).toHaveBeenCalled;
  })

  it('should should set state with an error if localStorage, logIn, or writeUserData rejects', () => {
    firebase.auth().onAuthStateChanged= jest.fn().mockImplementation( () => {
      throw new Error('error finding user')
    })
    wrapper = shallow(<Login logOut={jest.fn()} user={mockUser} logIn={jest.fn()}/>);
    expect(wrapper.state('errorState')).toEqual('error finding user')
  })

  it('should remove the user from local storage when signOut is called', () => {
    const KEY = 'userName';
    const VALUE = 'Jordan';

    localStorage.setItem(KEY, VALUE);
    expect(localStorage.setItem).toHaveBeenCalledWith(KEY, VALUE);
    expect(localStorage.__STORE__[KEY]).toBe(VALUE);

    wrapper.instance().signOut(KEY);
    expect(sessionStorage.__STORE__).toEqual({});
  })

  it('should call dispatch action on signOut', () => {
    const KEY = 'userName';
    wrapper.instance().signOut(KEY);
    expect(jest.fn()).toHaveBeenCalled
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

  it('should call dispatch on logIn', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.logIn();
    expect(mockDispatch).toHaveBeenCalled;
  })

  it('should call dispatch on logOut', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.logOut();
    expect(mockDispatch).toHaveBeenCalled;
  })
})