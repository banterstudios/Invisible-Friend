import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import NavLink from './NavLink'
import { MemoryRouter as Router } from 'react-router-dom'

describe('components/Navigation/NavLink', () => {
  describe('@renders', () => {
    it('should render correctly', () => {
      const component = shallow(<Router><NavLink /></Router>)

      expect(toJson(component.dive())).toMatchSnapshot()
      component.unmount()
    })
  })
})
