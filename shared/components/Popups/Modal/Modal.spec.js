import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Modal from './Modal'

describe('components/Popups/Modal', () => {
  let initialProps = {}

  describe('@renders', () => {
    it('in default state', () => {
      const component = shallow(<Modal { ...initialProps } />)

      expect(toJson(component)).toMatchSnapshot()
      component.unmount()
    })
  })
})
