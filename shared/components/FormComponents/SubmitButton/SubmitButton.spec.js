import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SubmitButton from './SubmitButton'

describe('components/FormComponents/SubmitButton', () => {
  describe('@renders', () => {
    it('in default state', () => {
      const component = shallow(<SubmitButton />)

      expect(toJson(component)).toMatchSnapshot()
      component.unmount()
    })
  })
})
