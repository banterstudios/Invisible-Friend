import React, { Component } from 'react'
import { connect } from 'react-redux'
import Wrapper from '../../components/Gui/Wrapper'
import Modal from '../../components/Popups/Modal'
import GameSignUpForm from '../../redux/containers/GameSignUpForm'
import { Redirect } from 'react-router-dom'

const mapStateToProps = ({ game }) => ({
  game
})

@connect(mapStateToProps, null)
export default class Home extends Component {
  render () {
    const { game: { data } } = this.props

    return (
      <Wrapper className='home'>
        <Modal open size='lg'>
          <GameSignUpForm
            redirectUrl='/game/madness'
          />
        </Modal>
        {
          data ? (
            <Redirect push to={`/game/${data.gameName}`} />
          ) : null
        }
      </Wrapper>
    )
  }
}
