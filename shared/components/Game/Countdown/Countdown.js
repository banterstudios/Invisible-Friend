import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Countdown extends PureComponent {
  static propTypes = {
    seconds: PropTypes.number,
    onStart: PropTypes.func,
    onEnd: PropTypes.func
  }

  static defaultProps = {
    seconds: 0
  }

  constructor (props) {
    super(props)

    this.state = {
      seconds: (this.props.seconds || 0)
    }

    this.intervalId = null
    this.duration = 1000
  }

  componentDidMount () {
    this.startTimer()
  }

  componentWillUnmount () {
    this.clearTimer()
  }

  startTimer = () => {
    if (this.props.onStart) {
      this.props.onStart()
    }

    this.intervalId = setInterval(this.handleInterval, this.duration)
  }

  endTimer = () => {
    if (this.props.onEnd) {
      this.props.onEnd()
    }

    this.clearTimer()
  }

  handleInterval = () => {
    const seconds = Math.max((this.state.seconds - 1), 0)

    if (seconds <= 0) {
      this.endTimer()
      return false
    }

    this.setState({
      seconds
    })
  }

  clearTimer = () => {
    clearInterval(this.intervalId)
  }

  render () {
    const { seconds } = this.state

    return (
      <div>
        <p style={{ fontSize: '24px', margin: 0 }}>{ seconds }</p>
      </div>
    )
  }
}
