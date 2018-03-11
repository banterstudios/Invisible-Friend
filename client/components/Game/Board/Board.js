import React, { Component } from 'react'
import { testForPassiveScroll } from '../../../utils/domUtils'
import { throttle } from '../../../utils/commonUtils'
import log from '../../../utils/log'
import glamorous from 'glamorous'
import SoundManager, { SOUND_START } from '../SoundManager'
import { getEventDistance, randomBetween, getVolumeFromCoords } from '../../../utils/mathUtils'

const StyledBoard = glamorous.div({
  position: 'relative',
  width: '100%',
  height: '100vh'
})

const FIND_RADIUS = 40
const SOUND_THROTTLE_DURATION = 150
const THROTTLE_DURATION = 50

export default class Board extends Component {
  constructor (props) {
    super(props)

    this.state = {
      volume: 1
    }

    this.gameData = null
    this.eventOpts = testForPassiveScroll ? { passive: true } : false
  }

  componentDidMount () {
    this.storeGameDataFromScreen()
    this.attachEvents()
  }

  componentWillUnmount () {
    this.unAttachEvents()
  }

  storeGameDataFromScreen = () => {
    const { documentElement: { offsetWidth, offsetHeight } } = document

    this.gameData = {
      x: randomBetween(FIND_RADIUS, offsetWidth - FIND_RADIUS),
      y: randomBetween(FIND_RADIUS, offsetHeight - FIND_RADIUS),
      boardWidth: offsetWidth,
      boardHeight: offsetHeight
    }
  }

  attachEvents = () => {
    document.addEventListener('mousemove', this.handleMove, this.eventOpts)
    document.addEventListener('click', this.handleClick, this.eventOpts)
  }

  unAttachEvents = () => {
    document.removeEventListener('mousemove', this.handleMove, this.eventOpts)
    document.removeEventListener('click', this.handleClick, this.eventOpts)
  }

  adjustSound = (event) => {
    const volume = getVolumeFromCoords(event, this.gameData)
    this.setState({ volume })
  }

  checkIfFound = (event) => {
    const d = getEventDistance(event, this.gameData)

    if (d <= FIND_RADIUS) {
      log('found ya!')
    }
  }

  handleMove = throttle(this.adjustSound, SOUND_THROTTLE_DURATION)

  handleClick = throttle(this.checkIfFound, THROTTLE_DURATION)

  render () {
    return (
      <StyledBoard>
        <SoundManager
          loop
          volume={this.state.volume}
          status={SOUND_START}
          url='https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/G4.mp3'
        />
      </StyledBoard>
    )
  }
}
