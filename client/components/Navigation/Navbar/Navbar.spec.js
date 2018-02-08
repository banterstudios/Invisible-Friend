import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import Navbar from './Navbar'

describe('components/Navigation/Navbar', () => {
  describe('@renders', () => {
    it('should render correctly', () => {
      const component = mount(<Navbar />)

      expect(toJson(component)).toMatchSnapshot()
      component.unmount()
    })
  })
})
