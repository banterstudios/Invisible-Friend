import React, { Component } from 'react'
import { connect } from 'react-redux'
import Wrapper from '../../components/Gui/Wrapper'
import Modal from '../../components/Popups/Modal'
import GameSignUpForm from '../../redux/containers/GameSignUpForm'

@connect(null, null)
export default class Home extends Component {
  render () {
    return (
      <Wrapper className='home'>
        <Modal open size='lg'>
          <GameSignUpForm
            onSubmit={() => new Promise((resolve) => setTimeout(() => resolve(), 2000))}
            redirectUrl='/game/madness'
          />
        </Modal>
      </Wrapper>
    )
  }
}
