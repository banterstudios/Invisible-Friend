import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import Input from './Input'

describe('components/Gui/Input', () => {
  let initialProps
  
  beforeEach(() => {
    initialProps = {
      type: 'text',
      name: 'input',
      value: 'hello',
      onBlur: jest.fn(),
      onFocus: jest.fn(),
      onInput: jest.fn(),
      onChange: jest.fn(),
      disabled: false
    }
  })

  describe('@renders', () => {
    it('in default state', () => {
      const component = mount(<Input { ...initialProps} />)

      expect(toJson(component)).toMatchSnapshot()
      component.unmount()
    })
  })

  describe('@events', () => {
    describe('clicking on', () => {
      it('onBlur will trigger a callback', () => {
        const component = mount(<Input { ...initialProps } />)
        component.simulate('blur')

        expect(initialProps.onBlur).toHaveBeenCalled()
        component.unmount()
      })

      it('onFocus will trigger a callback', () => {
        const component = mount(<Input { ...initialProps } />)
        component.simulate('focus')

        expect(initialProps.onFocus).toHaveBeenCalled()
        component.unmount()
      })

      it('onInput will trigger a callback', () => {
        const component = mount(<Input { ...initialProps } />)
        component.simulate('input')

        expect(initialProps.onInput).toHaveBeenCalled()
        component.unmount()
      })

      it('onChange will trigger a callback', () => {
        const component = mount(<Input { ...initialProps } />)
        component.simulate('change')

        expect(initialProps.onChange).toHaveBeenCalled()
        component.unmount()
      })
    })
  })
})
