
import React, { PureComponent } from 'react'
import { spring, Motion } from 'react-motion'

export default class Fade extends PureComponent {
  render () {
    const { children, isActive, style } = this.props

    return (
      <Motion
        style={{ opacity: spring(isActive ? 1 : 0) }}
        defaultStyle={{ opacity: 0 }}>
        {({ opacity }) =>
          <span style={{ ...style, opacity, display: opacity ? 'block' : 'none', width: '100%' }}>
            { children }
          </span>
        }
      </Motion>
    )
  }
}
