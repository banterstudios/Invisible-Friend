import React, { Component } from 'react'
import glamorous from 'glamorous'
import PropTypes from 'prop-types'

const NavbarWrapper = glamorous.nav(({ theme: { headerHeight }, direction }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  height: headerHeight,
  width: '100%',
  justifyContent: (direction === 'left' ? 'flex-start' : direction === 'center' ? 'center' : 'flex-end')
}))

export default class Navbar extends Component {
  static propTypes = {
    direction: PropTypes.string
  }

  render () {
    const { children } = this.props

    return (
      <NavbarWrapper role='navigation'>
        { children }
      </NavbarWrapper>
    )
  }
}
