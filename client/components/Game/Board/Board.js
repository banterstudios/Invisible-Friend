import React, { Component } from 'react'
import { testForPassiveScroll } from '../../../utils/domUtils'
import { throttle } from '../../../utils/commonUtils'
import log from '../../../utils/log'
import glamorous from 'glamorous'
import SoundManager from '../SoundManager'
import { getEventDistance, randomBetween } from '../../../utils/mathUtils'

const StyledBoard = glamorous.div({
  position: 'relative',
  width: '100%',
  height: '100vh'
})

const FIND_RADIUS = 40
const THROTTLE_DURATION = 50

export default class Board extends Component {
  constructor (props) {
    super(props)

    this.gameCoords = null
    this.eventOpts = testForPassiveScroll ? { passive: true } : false
  }

  componentDidMount () {
    this.storeGameCoordsFromScreen()
    this.attachEvents()
  }

  componentWillUnmount () {
    this.unAttachEvents()
  }

  storeGameCoordsFromScreen = () => {
    const { documentElement: { offsetWidth, offsetHeight } } = document

    this.gameCoords = {
      x: randomBetween(FIND_RADIUS, offsetWidth - FIND_RADIUS),
      y: randomBetween(FIND_RADIUS, offsetHeight - FIND_RADIUS)
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
    this.checkIfFound(event)
  }

  checkIfFound = (event) => {
    const d = getEventDistance(event, this.gameCoords)

    if (d <= FIND_RADIUS) {
      log('found ya!')
    }
  }

  handleMove = throttle(this.adjustSound, THROTTLE_DURATION)

  handleClick = throttle(this.checkIfFound, THROTTLE_DURATION)

  render () {
    return (
      <StyledBoard>
        <SoundManager />
      </StyledBoard>
    )
  }
}
