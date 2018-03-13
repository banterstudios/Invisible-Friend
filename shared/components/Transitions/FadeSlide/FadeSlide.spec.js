import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import FadeSlide from './FadeSlide'

describe('components/Transitions/FadeSlide', () => {
  describe('@renders', () => {
    it('should render correctly', () => {
      const component = shallow(<FadeSlide />)

      expect(toJson(component)).toMatchSnapshot()
      component.unmount()
    })
  })
})
