/* eslint-disable */

import React from 'react';
import { Main, mapStateToProps } from './Main';
import { shallow } from 'enzyme';

describe('Main', () => {
  it('should render correctly', () => {

    const mockUser = {
      userName: 'Jordan',
      userEmail: 'Jordan@Project.com',
      userPhoto: 'photo-url',
      userId: 'fancy encryption'
    }

    const wrapper = shallow(<Main user={mockUser}/>)
    expect(wrapper).toMatchSnapshot();
  })
})

describe('MSTP', () => {
  it('should define user props for the container', () => {
    const userName= "Sharon Jones";
    const userEmail= "sharon@gmail.com";
    const mockStore = {user: [ {name, userEmail} ]};
    const expected = [ {name, userEmail} ];
    const mapped = mapStateToProps(mockStore);
    expect(mapped.user).toEqual(expected)
  })

  it('should define the roaster props for the container', () => {
    const name = "Corvus";
    const location = "Denver";
    const mockStore = {roasters: [ { name, location }]}
    const expected = [{ name, location }]
    const mapped = mapStateToProps(mockStore);
    expect(mapped.roasters).toEqual(expected);
  })
})