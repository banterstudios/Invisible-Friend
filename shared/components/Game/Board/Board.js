import React, { Component } from 'react'
import { testForPassiveScroll } from '../../../utils/domUtils'
import { throttle } from '../../../utils/commonUtils'
import log from '../../../utils/log'
import glamorous from 'glamorous'
import SoundManager, { SOUND_START } from '../SoundManager'
import { getEventDistance, randomBetween, getVolumeFromCoords } from '../../../utils/mathUtils'
import FoundPicture from '../FoundPicture'

const StyledBoard = glamorous.div({
  position: 'relative',
  width: '100%',
  height: '100vh'
})

const FIND_RADIUS = 100
const SOUND_THROTTLE_DURATION = 150
const THROTTLE_DURATION = 50

export default class Board extends Component {
  constructor (props) {
    super(props)

    this.state = {
      volume: 0,
      found: false
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
    console.log(volume)
    this.setState({ volume })
  }

  checkIfFound = (event) => {
    const d = getEventDistance(event, this.gameData)

    if (d <= FIND_RADIUS) {
      this.setState({ found: true })
      log('found ya!')
    }
  }

  handleMove = throttle(this.adjustSound, SOUND_THROTTLE_DURATION)

  handleClick = throttle(this.checkIfFound, THROTTLE_DURATION)

  render () {
    const { game } = this.props
    const { found, volume } = this.state

    if (!game || !game.data) {
      return null
    }

    return (
      <StyledBoard>
        <SoundManager
          loop
          volume={volume}
          status={SOUND_START}
          url={game.data.audioUrl}
        />
        {
          found ? (
            <FoundPicture
              posX={this.gameData.x}
              posY={this.gameData.y}
              src={game.data.imageUrl}
            />
          ) : null
        }
      </StyledBoard>
    )
  }
}
