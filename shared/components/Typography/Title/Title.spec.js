import React from 'react'
import { shallow, mount } from 'enzyme'
import Title, { titleFactory } from './Title'
import toJson from 'enzyme-to-json'

describe('components/Typography/Title', () => {
  describe('@renders', () => {
    it('should render correctly', () => {
      const component = shallow(<Title />)

      expect(toJson(component)).toMatchSnapshot()
      component.unmount()
    })

    describe('renders the type', () => {
      for (let i = 1, len = 7; i < len; i++) {
        const type = `h${i}`

        it(`${type} if the prop type is passed in`, () => {
          const component = shallow(<Title type={type} />)
          expect(toJson(component)).toMatchSnapshot()
          component.unmount()
        })
      }
    })

    it('renders to a default h1 if an incorrect type prop is passed through', () => {
      const component = shallow(<Title type={'sdf'} />)
      expect(toJson(component)).toMatchSnapshot()
      component.unmount()
    })

    it('renders text if passed in via children', () => {
      const text = 'test!'
      const component = mount(<Title type='h2'>{text}</Title>)
      expect(component.text()).toEqual(text)
      component.unmount()
    })
  })
})
