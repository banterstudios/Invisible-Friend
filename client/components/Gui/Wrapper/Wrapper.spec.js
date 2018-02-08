import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import Wrapper from './Wrapper'

describe('components/Gui/Wrapper', () => {
  describe('@renders', () => {
    it('in default state', () => {
      const component = mount(<Wrapper />)

      expect(toJson(component)).toMatchSnapshot()
      component.unmount()
    })
  })
})
