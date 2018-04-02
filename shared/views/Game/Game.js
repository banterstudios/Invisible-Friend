import React, { Component } from 'react'
import { connect } from 'react-redux'
import Wrapper from '../../components/Gui/Wrapper'
import Countdown from '../../components/Game/Countdown'
import GameBoard from '../../redux/containers/GameBoard'

@connect(null, null)
export default class Game extends Component {
  state = {
    canStart: false
  }

  startGame = () => (this.setState({ canStart: true }))

  render () {
    const { canStart } = this.state

    return (
      <Wrapper className='game'>
        { !canStart && <Countdown seconds={5} onEnd={this.startGame} /> }
        { canStart && <GameBoard /> }
      </Wrapper>
    )
  }
}
