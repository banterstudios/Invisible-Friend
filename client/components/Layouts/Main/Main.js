import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Wrapper from '../../Gui/Wrapper'
import Header from '../../Common/Header'
import glamorous from 'glamorous'

const Content = glamorous.div(({ theme: { headerHeight } }) => ({
  position: 'relative',
  width: '100%',
  paddingTop: headerHeight
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
        <Header />
        <Content>
          { children }
        </Content>
      </Wrapper>
    )
  }
}
