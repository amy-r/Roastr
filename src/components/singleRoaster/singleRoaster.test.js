/* eslint-disable */

import React from 'react';
import { SingleRoaster, mapStateToProps } from './SingleRoaster';
import { shallow } from 'enzyme'

describe('FormCard', () => {
  it('should exist', () => {
    const wrapper = shallow(
      <SingleRoaster 
        coffees={[{roaster: 'Corvus'}]}
        name='Corvus'
      />)

    expect(wrapper).toMatchSnapshot();
  })

  describe('MSTP', () => {
    it('should define the coffee props for the container', () => {
      const roasterName = "Corvus";
      const overAllScore= "10";
      const mockStore = {coffees: [ {roasterName, overAllScore} ]};
      const expected = [ {roasterName, overAllScore} ];
      const mapped = mapStateToProps(mockStore);
      expect(mapped.coffees).toEqual(expected)
    })
  })
})