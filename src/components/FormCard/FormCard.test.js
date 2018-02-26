/* eslint-disable */

import React from 'react';
import { FormCard } from './FormCard';
import { shallow } from 'enzyme'

describe('FormCard', () => {
  it('should exist', () => {
    const wrapper = shallow(<FormCard />)

    expect(wrapper).toMatchSnapshot();
  })
})