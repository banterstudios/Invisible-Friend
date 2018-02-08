import React from 'react'
import { shallow } from 'enzyme'
import Copy from './Copy'

describe('components/Typography/Copy', () => {
  describe('@renders', () => {
    it('should render correctly', () => {
      const component = shallow(<Copy />)

      expect(component.exists()).toBe(true)
      component.unmount()
    })
  })
})
