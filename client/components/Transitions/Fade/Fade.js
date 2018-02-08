
import React, { PureComponent } from 'react'
import { spring, Motion } from 'react-motion'

export default class Fade extends PureComponent {
  render () {
    const { children, isActive } = this.props

    return (
      <Motion
        style={{ opacity: spring(isActive ? 1 : 0) }}
        defaultStyle={{ opacity: 0 }}>
        {({ opacity }) =>
          <span style={{ opacity, display: opacity ? 'block' : 'none' }}>
            { children }
          </span>
        }
      </Motion>
    )
  }
}
