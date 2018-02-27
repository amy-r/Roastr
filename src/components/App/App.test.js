/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { App, updateStore, mapStateToProps, mapDispatchToProps } from './App';
import { shallow } from 'enzyme';
require('jest-localstorage-mock');

describe('App', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<App />, {disableLifecycleMethods:true})

    expect(wrapper).toMatchSnapshot();
  })

  it('should call retrievedRoasters and retrievedCoffees if there is a user', () => {
    const wrapper = shallow(<App retrievedCoffees={jest.fn()} retrievedRoasters={jest.fn()}/>, {disableLifecycleMethods:true})
    wrapper.instance().updateStore();

    expect(wrapper.props().retrievedCoffees).toHaveBeenCalled;
    expect(wrapper.props().retrievedRoasters).toHaveBeenCalled;
  })

  it('should call logIn and updateStore in componentDidMount if a user exists', () => {
    localStorage.setItem('user', {userName: 'Will'});
    const wrapper = shallow(<App logIn={jest.fn()}/>, {disableLifecycleMethods:true})
    
    expect(wrapper.props().logIn).toHaveBeenCalled;
    expect(wrapper.instance().updateStore).toHaveBeenCalled;
  })

  it('should setState with an error if updateStore rejects', () => {
    localStorage.setItem('user', {userName: 'Will'});
    const wrapper = shallow(<App logIn={jest.fn()}/>)
    wrapper.instance().updateStore = jest.fn().mockImplementation( () => {
      throw new Error('error')
    })

    expect(wrapper.state('errorState')).toEqual('Error Retrieving Information')
  })
})

describe('MSTP and MDTP', () => {
  it('should define user props for the container', () => {
    const userName= "Bob Dylan";
    const userEmail= "bob@gmail.com";
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

  it('should call dispatch on retrievedRoasters', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.retrievedRoasters();
    expect(mockDispatch).toHaveBeenCalled;
  })

  it('should call dispatch on retrievedCoffees', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.retrievedCoffees();
    expect(mockDispatch).toHaveBeenCalled;
  })  
})
