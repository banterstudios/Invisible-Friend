import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Logo from './Logo'

describe('components/Common/Logo', () => {
  describe('@renders', () => {
    it('should render correctly', () => {
      const component = shallow(<Logo />)

      expect(toJson(component)).toMatchSnapshot()
      component.unmount()
    })
  })
})
