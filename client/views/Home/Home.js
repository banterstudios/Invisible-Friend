import React, { Component } from 'react'
import { connect } from 'react-redux'
import Wrapper from '../../components/Gui/Wrapper'
import DropZone from '../../components/Gui/DropZone'
import Modal from '../../components/Popups/Modal'
import Title from '../../components/Typography/Title'
import glamorous from 'glamorous'

const StyledRow = glamorous.div(({ theme: { mobileQuery } }) => ({
  marginBottom: '30px',

  [mobileQuery]: {
    marginBottom: '20px'
  }
}))

const StyledCol = glamorous.div(({ theme: { mobileQuery } }) => ({
  [mobileQuery]: {
    marginTop: '20px'
  }
}))

const Slide1 = () => (
  <div className='container'>
    <StyledRow className='row'>
      <div className='col'>
        <Title type='h1'>
          Invisible Friend
        </Title>
      </div>
    </StyledRow>

    <StyledRow className='row'>
      <div className='col'>
        <Title type='h3'>
          Upload a picture of your mate and a sound clip of yourself and use that to determine where ya fucking mates head is at!
        </Title>
      </div>
    </StyledRow>

    <StyledRow className='row'>
      <div className='col-md-6' md={6}>
        <DropZone title='Drop your mates face here' />
      </div>
      <StyledCol className='col-md-6'>
        <DropZone title='Drop your best voice here' />
      </StyledCol>
    </StyledRow>
  </div>
)

@connect(null, null)
export default class Home extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Wrapper className='home'>
        <Modal open size='lg'>
          <Slide1 />
        </Modal>
      </Wrapper>
    )
  }
}
