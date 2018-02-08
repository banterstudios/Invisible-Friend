import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Fade from './Fade'

describe('components/Transitions/Fade', () => {
  describe('@renders', () => {
    it('should render correctly', () => {
      const component = shallow(<Fade />)

      expect(toJson(component)).toMatchSnapshot()
      component.unmount()
    })
  })
})
