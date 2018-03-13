import React, { Component } from 'react'

import Wrapper from '../../components/Gui/Wrapper'

export default class PageNotFound extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Wrapper className='page-not-found'>
        Page not found... Try turning it off and on again
      </Wrapper>
    )
  }
}
