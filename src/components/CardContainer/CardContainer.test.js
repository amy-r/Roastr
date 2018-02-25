import React from 'react';
import ReactDOM from 'react-dom';
import { CardContainer, mapStateToProps, mapDispatchToProps } from './CardContainer';
import { shallow, mount } from 'enzyme';

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
})

describe('MSTP', () => {
  it('should define roaster props for the container', () => {
    const name = "Corvus";
    const location = "Denver";
    const mockStore = {roasters: [ { name, location }]}
    const expected = [{ name, location }]
    const mapped = mapStateToProps(mockStore);
    expect(mapped.roasters).toEqual(expected);
  })
})