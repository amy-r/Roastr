import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<App />, {disableLifecycleMethods:true})

    expect(wrapper).toMatchSnapshot();
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

  it('should call dispatch on MDTP', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.logIn();
    expect(mockDispatch).toHaveBeenCalled;
  })
})
