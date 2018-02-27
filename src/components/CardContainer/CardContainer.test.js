/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { CardContainer, mapStateToProps, mapDispatchToProps } from './CardContainer';
import { shallow } from 'enzyme';

const mockRoasters = [
  { userId: "encryptedid",
    name: "Corvus",
    location: "Denver",
    altitude: "5280",
    equipment: "drum",
    water: "calcium",
    contact: "dom",
    email: "dom@corvus.com" },
  { userId: "encryptedid",
    name: "Boxcar",
    location: "Boulder",
    altitude: "5360",
    equipment: "drum",
    water: "calcium, flouride",
    contact: "charles",
    email: "charles@boxcar.com" }
]

describe('CardContainer', () => {

  it('should render correctly', () => {

    const wrapper = shallow(<CardContainer roasters={mockRoasters} />, {disableLifecycleMethods:true})

    expect(wrapper).toMatchSnapshot();
  })

  it('should call renderedCards', () => {
    const wrapper = shallow(<CardContainer roasters={mockRoasters} />, {disableLifecycleMethods:true})

    wrapper.instance().renderedCards = jest.fn();

    expect(wrapper.instance().renderedCards).toHaveBeenCalled;
  })
})

describe('MDTP', () => {
  it('should define roaster props for the container', () => {
    const name = "Corvus";
    const location = "Denver";
    const mockStore = {roasters: [ { name, location }]}
    const expected = [{ name, location }]
    const mapped = mapStateToProps(mockStore);
    expect(mapped.roasters).toEqual(expected);
  })

  it('should define the coffee props for the container', () => {
    const roasterName = "Corvus";
    const overAllScore= "10";
    const mockStore = {coffees: [ {roasterName, overAllScore} ]};
    const expected = [ {roasterName, overAllScore} ];
    const mapped = mapStateToProps(mockStore);
    expect(mapped.coffees).toEqual(expected);
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