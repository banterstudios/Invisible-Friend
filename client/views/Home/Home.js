import React, { Component } from 'react'
import { connect } from 'react-redux'
import Wrapper from '../../components/Gui/Wrapper'

@connect(null, null)
export default class Home extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Wrapper className='home'>
      </Wrapper>
    )
  }
}
