import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LazyImage from '../../Gui/LazyImage'
import glamorous from 'glamorous'

const Wrapper = glamorous.div(({
  posX = 0,
  posY = 0
}) => ({
  position: 'absolute',
  width: '100%',
  maxWidth: '250px',
  top: `${posY}px`,
  left: `${posX}px`,
  transform: `translate(-50%, -50%)`
}))

export default class FoundPicture extends Component {
  static propTypes = {
    src: PropTypes.string,
    posX: PropTypes.number,
    posY: PropTypes.number
  }

  render () {
    const { posX, posY, src } = this.props

    return (
      <Wrapper posX={posX} posY={posY}>
        <LazyImage src={src} />
      </Wrapper>
    )
  }
}
