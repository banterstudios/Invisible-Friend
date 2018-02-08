import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import FormGroup from './FormGroup'

describe('components/FormComponents/FormGroup', () => {
  let initialProps = {}

  describe('@renders', () => {
    it('in default state', () => {
      const component = shallow(<FormGroup { ...initialProps } />)

      expect(toJson(component)).toMatchSnapshot()
      component.unmount()
    })
  })
})
