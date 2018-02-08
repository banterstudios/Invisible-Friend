import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import TextInput from './TextInput'

const noop = () => {}

describe('components/FormComponents/TextInput', () => {
  let initialProps = {
    type: 'text',
    name: 'input',
    value: 'hello',
    onBlur: noop,
    onFocus: noop,
    onInput: noop,
    onChange: noop,
    disabled: false
  }

  describe('@renders', () => {
    it('in default state', () => {
      const component = mount(<TextInput { ...initialProps } />)

      expect(toJson(component)).toMatchSnapshot()
      component.unmount()
    })
  })
})
