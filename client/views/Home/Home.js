import React, { Component } from 'react'
import { connect } from 'react-redux'
import Wrapper from '../../components/Gui/Wrapper'
import Modal from '../../components/Popups/Modal'
import GameSignUpForm from '../../components/Game/SignUpForm'

@connect(null, null)
export default class Home extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Wrapper className='home'>
        <Modal open size='lg'>
          <GameSignUpForm onSubmit={() => new Promise((resolve) => setTimeout(() => resolve(), 2000))} />
        </Modal>
      </Wrapper>
    )
  }
}
