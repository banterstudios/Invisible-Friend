import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Spinner from './Spinner'

describe('components/Common/Loaders/Spinner', () => {
  describe('@renders', () => {
    it('in default state', () => {
      const component = shallow(<Spinner />)

      expect(toJson(component)).toMatchSnapshot()
      component.unmount()
    })
  })
})
