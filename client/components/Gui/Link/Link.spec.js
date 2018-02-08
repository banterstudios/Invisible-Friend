import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Link from './Link'
import { MemoryRouter as Router } from 'react-router-dom'

describe('components/Gui/Link', () => {
  describe('@renders', () => {
    it('should render correctly', () => {
      const component = shallow(<Router><Link /></Router>)

      expect(toJson(component.dive())).toMatchSnapshot()
      component.unmount()
    })
  })
})
