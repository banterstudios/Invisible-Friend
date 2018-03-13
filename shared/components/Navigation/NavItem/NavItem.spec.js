import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import NavItem from './NavItem'

describe('components/Navigation/NavItem', () => {
  describe('@renders', () => {
    it('should render correctly', () => {
      const component = shallow(<NavItem />)

      expect(toJson(component)).toMatchSnapshot()
      component.unmount()
    })
  })
})
