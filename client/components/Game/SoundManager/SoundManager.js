import React, { PureComponent } from 'react' // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'
import { SOUND_START, SOUND_STOP, SOUND_PAUSE } from './soundState'
import { errorLog } from '../../../utils/log'

const getAudioContext = () => (
  window.AudioContext ? (
    new window.AudioContext()
  ) : (
    window.webkitAudioContext ? (
      new window.webkitAudioContext() // eslint-disable-line
    ) : (
      null
    )
  )
)

export default class SoundManager extends PureComponent {
  static propTypes = {
    url: PropTypes.string,
    loop: PropTypes.bool,
    status: PropTypes.oneOf([
      SOUND_START,
      SOUND_STOP,
      SOUND_PAUSE
    ]).isRequired
  }

  static defaultProps = {
    status: SOUND_START,
    loop: false
  }

  constructor (props) {
    super(props)

    this.audioCtx = getAudioContext()
    this.sound = null
    this.createSound = this.createSound.bind(this)
  }

  componentDidMount () {
    this.createSound()
  }

  loadSound = (url) => {
    return fetch(url)
      .then((response) => response.arrayBuffer())
  }

  async createSound () {
    const { url, loop } = this.props
    const { audioCtx } = this

    if (!url) {
      return false
    }

    try {
      const bufferedResponse = await this.loadSound(url)
      this.sound = audioCtx.createBufferSource()

      audioCtx.decodeAudioData(bufferedResponse, (decodedData) => {
        this.sound.buffer = decodedData
        this.sound.connect(audioCtx.destination)
        this.sound.start(0)
        this.sound.loop = loop
      })
    } catch (e) {
      errorLog('Failed to load sound: ', e)
    }
  }

  componentWillReceiveProps ({ status }) {
    if (status !== this.props.status) {
      // do something
    }
  }

  componentWillUnmount () {
    this.sound.stop()
  }

  render () {
    return null
  }
}
