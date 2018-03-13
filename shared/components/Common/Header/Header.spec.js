import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Header from './Header'

describe('components/Common/Header', () => {
  describe('@renders', () => {
    it('should render correctly', () => {
      const component = shallow(<Header />)

      expect(toJson(component)).toMatchSnapshot()
      component.unmount()
    })
  })
})
