import React from 'react'
import { shallow } from 'enzyme'
import DropZone from './DropZone'

describe('client/components/Gui/DropZone', () => {
  describe('Given this component', () => {
    describe('When it is rendered', () => {
      it('should exist', () => {
        const component = shallow(<DropZone />)
        expect(component.exists()).toBe(true)
        component.unmount()
      })
    })
  })
})
