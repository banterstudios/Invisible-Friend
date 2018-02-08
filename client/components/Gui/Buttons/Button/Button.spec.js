import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Button from './Button'

describe('components/Gui/Button', () => {
  describe('@renders', () => {
    it('in default state', () => {
      const component = shallow(<Button />)

      expect(toJson(component)).toMatchSnapshot()
      component.unmount()
    })
  })
})
