/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { CoffeeForm, mapDispatchToProps } from './CoffeeForm';
import { shallow } from 'enzyme';
import * as firebaseFunctions from '../../Utilities/firebaseFunctions';

describe('CoffeeForm', () => {
  it('should exist', () => {
    const wrapper = shallow(<CoffeeForm />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should start with a state of empty strings', () => {
    const expectedState = {
      name:'',
      overallScore: '',
      region: '',
      acidity: '',
      body: '',
      sweetness: '',
      tactile: '',
      overallImpression: '', 
      roaster: undefined,
      email: undefined,
      errorState:'',
      additionalComments: ''
    };

    const wrapper = shallow(<CoffeeForm />);

    expect(wrapper.state()).toEqual(expectedState);
  });

  it('should update state of every input if they are modified', () => {
    const expectedState = {
      name:'1',
      overallScore: '1',
      region: '1',
      acidity: '1',
      body: '1',
      sweetness: '1',
      tactile: '1',
      email: undefined,
      overallImpression: '1', 
      roaster: undefined,
      errorState: '',
      additionalComments: '1'
    };

    const wrapper = shallow(<CoffeeForm />);

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

  it('should make a fetch call with sendEmail when passed the correct params', () => {
    const form = { name:'Corvus', overallImpression: 'great'}
    const wrapper = shallow(<CoffeeForm />)
    window.fetch = jest.fn();

    wrapper.instance().sendEmail(form);

    expect(window.fetch).toHaveBeenCalled;
  })

  it('should setState to an error when status is not okay', () => {
    const form = { name:'Corvus', overallImpression: 'great'}
    const expectedState = {
      name:'',
      overallScore: '',
      region: '',
      acidity: '',
      body: '',
      sweetness: '',
      tactile: '',
      email: undefined,
      overallImpression: '', 
      roaster: undefined,
      errorState: 'Your email could not be sent at this time',
      additionalComments: '',
    }
    
    const wrapper = shallow(<CoffeeForm />)
    window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false,
          status: 404,
          error

        })
    }) 
    wrapper.instance().sendEmail(form)

    expect(wrapper.state()).toEqual(expectedState)  
  })
  
  it('handleSubmit should reset the values of the input fields', () => {
    const expectedState = {
      name:'',
      overallScore: '',
      region: '',
      acidity: '',
      body: '',
      sweetness: '',
      tactile: '',
      overallImpression: '', 
      roaster: '',
      email: '',
      errorState: '',
      additionalComments: ''
    };
    
    const mockEvent = {
      preventDefault: jest.fn()
    }

    const wrapper = shallow(<CoffeeForm 
      addCoffee={jest.fn()}
      history={{push: jest.fn()}}
      name='corvus'
    />);
    wrapper.setState({
      name: 'Marcus Mumford'
    })
    wrapper.instance().sendEmail = jest.fn();
    wrapper.instance().handleSubmit(mockEvent)
    expect(wrapper.state()).toEqual(expectedState);
  })

  it('should set an error state if there is a problem with handleSubmit', () => {
    const expectedState = {
      name:'',
      overallScore: '',
      region: '',
      acidity: '',
      body: '',
      sweetness: '',
      tactile: '',
      overallImpression: '', 
      roaster: undefined,
      email: undefined,
      errorState: 'Your email could not be sent at this time',
      additionalComments: ''
    };
    const wrapper = shallow(<CoffeeForm addCoffee={jest.fn()} />)
    wrapper.instance().handleSubmit()

    expect(wrapper.state()).toEqual(expectedState);
  })

  it('should call addCoffee and sendEmail on submit', () => {
    const wrapper = shallow(<CoffeeForm addCoffee={jest.fn()} />)
    wrapper.instance().handleSubmit();

    expect(wrapper.props().addCoffee).toHaveBeenCalled;
    expect(wrapper.instance().sendEmail).toHaveBeenCalled;
  })
})

describe('MDTP', () => {
  it('should call dispatch on addCoffee', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addCoffee();
    expect(mockDispatch).toHaveBeenCalled;
  })
})