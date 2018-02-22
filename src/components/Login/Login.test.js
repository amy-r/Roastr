import React from 'react';
import ReactDOM from 'react-dom';
import { Login } from './Login';
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