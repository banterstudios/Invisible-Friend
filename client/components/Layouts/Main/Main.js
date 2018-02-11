import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Wrapper from '../../Gui/Wrapper'
import glamorous from 'glamorous'

const Content = glamorous.div(({ theme: { headerHeight } }) => ({
  position: 'relative',
  width: '100%'
}))

export default class Main extends Component {
  static PropTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.node
    ])
  }

  render () {
    const { children } = this.props

    return (
      <Wrapper>
        <Content>
          { children }
        </Content>
      </Wrapper>
    )
  }
}
