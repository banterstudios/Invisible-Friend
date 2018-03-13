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
    ]).isRequired,
    volume: PropTypes.number
  }

  static defaultProps = {
    status: SOUND_START,
    loop: false,
    volume: 1
  }

  constructor (props) {
    super(props)

    this.audioCtx = getAudioContext()
    this.sound = null
    this.gainNode = null
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
    const { url, loop, volume } = this.props
    const { audioCtx } = this

    if (!url) {
      return false
    }

    try {
      const bufferedResponse = await this.loadSound(url)
      this.sound = audioCtx.createBufferSource()

      audioCtx.decodeAudioData(bufferedResponse, (decodedData) => {
        this.gainNode = audioCtx.createGain()
        this.gainNode.gain.value = volume
        this.gainNode.connect(audioCtx.destination)
        this.sound.buffer = decodedData
        this.sound.connect(this.gainNode)
        this.sound.start(0)
        this.sound.loop = loop
      })
    } catch (e) {
      errorLog('Failed to load sound: ', e)
    }
  }

  updateVolume = (volume) => {
    if (!this.gainNode) {
      return false
    }

    this.gainNode.gain.value = volume
  }

  componentWillReceiveProps ({ status, volume }) {
    if (status !== this.props.status) {
      // do something
    }

    if (volume !== this.props.volume) {
      this.updateVolume(volume)
    }
  }

  componentWillUnmount () {
    if (!this.sound) {
      return false
    }

    this.sound.stop(0)
    this.sound = null
    this.gainNode = null
  }

  render () {
    return null
  }
}
