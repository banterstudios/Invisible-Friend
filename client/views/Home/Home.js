import React, { Component } from 'react'
import { connect } from 'react-redux'
import Wrapper from '../../components/Gui/Wrapper'
import DropZone from '../../components/Gui/DropZone'
import Modal from '../../components/Popups/Modal'
import { Container, Row, Col } from 'react-grid-system'
import Title from '../../components/Typography/Title'
import glamorous from 'glamorous'

const StyledRow = glamorous(Row)({
  marginBottom: '20px'
})

const StyledCol = glamorous(Col)(({ theme: { mobileQuery } }) => ({
  [mobileQuery]: {
    marginTop: '20px'
  }
}))

const Slide1 = () => (
  <Container>
    <StyledRow>
      <Col>
        <Title type='h1'>
          Invisible Friend
        </Title>
      </Col>
    </StyledRow>

    <StyledRow>
      <Col>
        <Title type='h3'>
          Upload a picture of your mate and a sound clip of yourself and use that to determine where ya fucking mates head is at!
        </Title>
      </Col>
    </StyledRow>

    <StyledRow>
      <Col md={6}>
        <DropZone title='Drop your mates face here' />
      </Col>
      <StyledCol md={6}>
        <DropZone title='Drop your best voice here' />
      </StyledCol>
    </StyledRow>
  </Container>
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
