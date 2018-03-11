import React, { PureComponent } from 'react'
import glamorous from 'glamorous'
import PropTypes from 'prop-types'

const StyledProgressBar = glamorous.div(({
  theme: {
    primaryProgressColor
  },
  progress
}) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: 3,
  backgroundColor: primaryProgressColor,
  transform: `scale3d(${progress / 100}, 1, 1)`,
  transformOrigin: '0 0'
}))

export default class AjaxProgressBar extends PureComponent {
  static propTypes = {
    progress: PropTypes.number
  }

  static defaultProps = {
    progress: 0
  }

  render () {
    return (
      <StyledProgressBar className='ajax-progress-bar' { ...this.props } />
    )
  }
}
