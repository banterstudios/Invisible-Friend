import React, { PureComponent } from 'react' // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'

export default class SoundManager extends PureComponent {
  static propTypes = {
    url: PropTypes.string
  }

  componentDidMount () {
    this.createSound()
  }

  createSound = () => {
    const { url } = this.props

    if (!url) {
      return false
    }
  }

  render () {
    return null
  }
}
