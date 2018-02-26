import React from 'react';
import ReactDOM from 'react-dom';
import { CoffeeForm, mapDispatchToProps } from './CoffeeForm';
import { shallow } from 'enzyme';

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
      roaster: '',
      email: '',
      errorState:'',
      additionalComments: ''
    };

    const wrapper = shallow(<CoffeeForm />);

    expect(wrapper.state()).toEqual(expectedState);
  });

  it('should update state if the name field is typed into', () => {
    const expectedState = {
      name:'Jordan',
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
    const wrapper = shallow(<CoffeeForm />)
    const mockEvent = {
      target: {
        name: 'name',
        value: 'Jordan'
    }}

    wrapper.find('input').first().simulate('change', mockEvent);
    expect(wrapper.state()).toEqual(expectedState);
  })

  it('should update state of every input if they are modified', () => {
    const expectedState = {
      name:'1',
      overallScore: '1',
      region: '1',
      acidity: '1',
      body: '1',
      sweetness: '1',
      tactile: '1',
      email: '1',
      overallImpression: '1', 
      roaster: '1',
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
      email: '',
      overallImpression: '', 
      roaster: '',
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
})

describe('MDTP', () => {
  it('should call the dispatch function on MDTP', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addCoffee();
    expect(mockDispatch).toHaveBeenCalled;

  })
})