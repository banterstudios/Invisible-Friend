import React, { PureComponent } from 'react'
import { spring, Motion } from 'react-motion'
import glamorous from 'glamorous'
import PropTypes from 'prop-types'

const Wrapper = glamorous.span(({ opacity, x, y, direction }) => ({
  position: 'relative',
  width: '100%',
  opacity,
  display: opacity ? 'block' : 'none',
  transform: getAxis(direction) === 'x' ? `translate3d(${x}px, 0, 0)` : `translate3d(0, ${y}px, 0)`
}))

const getAxis = (direction) => (direction === 'left' || direction === 'right' ? 'x' : 'y')
const getDistance = (distance, direction) => (direction === 'right' || direction === 'down' ? (distance * -1) : distance)

export default class FadeSlide extends PureComponent {
  static propTypes = {
    isActive: PropTypes.bool,
    children: PropTypes.any,
    distance: PropTypes.number,
    direction: PropTypes.string
  }

  static defaultProps = {
    distance: 20,
    direction: 'left'
  }

  getStyle = ({ isActive, distance, direction }) => ({
    opacity: spring(isActive ? 1 : 0),
    [getAxis(direction)]: spring(isActive ? 0 : getDistance(distance, direction))
  })

  getDefaultStyle = ({ distance, direction }) => ({
    opacity: 0,
    [getAxis(direction)]: getDistance(distance, direction)
  })

  render () {
    const { children, isActive, distance, direction } = this.props

    return (
      <Motion
        style={this.getStyle({ isActive, distance, direction })}
        defaultStyle={this.getDefaultStyle({ distance, direction })}>
        {(styles) =>
          <Wrapper { ...styles } direction={direction}>
            {children}
          </Wrapper>
        }
      </Motion>
    )
  }
}
