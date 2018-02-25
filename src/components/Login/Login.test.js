import React from 'react';
import ReactDOM from 'react-dom';
import { Login, mapStateToProps, mapDispatchToProps, signOut } from './Login';
import { shallow, mount } from 'enzyme';
require('jest-localstorage-mock');

describe('Login', () => {
  let wrapper;
;

  beforeEach(()=> {
    const mockUser = {
      userName: 'Jordan',
      userEmail: 'Jordan@Project.com',
      userPhoto: 'photo-url',
      userId: 'fancy encryption'
    }

    wrapper = shallow(<Login logOut={jest.fn()} user={mockUser}/>, {disableLifecycleMethods:true});
    
  })

  it('should exist', () => {
    expect(wrapper).toMatchSnapshot();
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

  it('should call the dispatch function on MDTP for logIn', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.logIn();
    expect(mockDispatch).toHaveBeenCalled;
  })

  it('should call the dispatch function on MDTP for logOut', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.logOut();
    expect(mockDispatch).toHaveBeenCalled;
  })

  it('should call the dispatch function on MDTP for retrievedRoasters', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.retrievedRoasters();
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  })
})