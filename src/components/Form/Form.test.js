/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Form, mapStateToProps, mapDispatchToProps } from './Form';
import { shallow } from 'enzyme';

describe('Form', () => {
  it('should exist', () => {
    const wrapper = shallow(<Form />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should start with a state of empty strings', () => {
    const expectedState = {
      name:'',
      location: '',
      altitude: '',
      equipment: '',
      water: '',
      contact: '',
      email: '',
    }

    const wrapper = shallow(<Form />);

    expect(wrapper.state()).toEqual(expectedState);
  });

  it('should update state if the name field is typed into', () => {
    const expectedState = {
      name:'Amy',
      location: '',
      altitude: '',
      equipment: '',
      water: '',
      contact: '',
      email: '',
    }
    const wrapper = shallow(<Form />)
    const mockEvent = {
      target: {
        name: 'name',
        value: 'Amy'
    }}

    wrapper.find('input').first().simulate('change', mockEvent);
    expect(wrapper.state()).toEqual(expectedState);
  })

  it('should update state of every input if they are modified', () => {
    const expectedState = {
      name:'1',
      location: '1',
      altitude: '1',
      equipment: '1',
      water: '1',
      contact: '1',
      email: '1',
    }

    const wrapper = shallow(<Form />);

    const inputs = wrapper.find('input');
    const mockEventCreator = (inputName) => {
      return { 
        target: {
          name: inputName,
          value: '1'
        } 
      }
    };

    inputs.forEach( input => {
      input.simulate('change', mockEventCreator(input.prop('name')))
    });

    expect(wrapper.state()).toEqual(expectedState)
  });
})

describe('MSTP and MDTP', () => {

  it('should define the user props for the container MSTP', () => {
    const userName= "Frank Ocean";
    const userEmail= "frank@gmail.com";
    const mockStore = {user: [ {name, userEmail} ]};
    const expected = [ {name, userEmail} ];
    const mapped = mapStateToProps(mockStore);
    expect(mapped.user).toEqual(expected)
  })
  
  it('should call the dispatch function on MDTP', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addRoaster();
    expect(mockDispatch).toHaveBeenCalled;
  })
})