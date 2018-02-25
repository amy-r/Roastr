import React from 'react';
import ReactDOM from 'react-dom';
import { Main, mapStateToProps, mapDispatchToProps } from './Main';
import { shallow, mount } from 'enzyme';

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
})