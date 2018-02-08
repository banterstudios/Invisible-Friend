import React, { PureComponent } from 'react'
import glamorous from 'glamorous'
import LazyImage from '../../Gui/LazyImage'
import { logo } from '../../../consts/images'
import PropTypes from 'prop-types'
import { checkIfValueIsAllowedOrSetDefault } from '../../../utils/objectUtils'
import Link from '../../Gui/Link'

const allowedModifiers = ['sm', 'md', 'lg']

const LogoWrapper = glamorous.div(({ modifier, theme: { logoSmWidth, logoSmHeight } }) => ({
  position: 'relative',
  width: modifier === 'sm' ? logoSmWidth : '20px',
  height: modifier === 'sm' ? logoSmHeight : '20px'
}))

export default class Logo extends PureComponent {
  static propTypes = {
    modifier: PropTypes.string
  }

  render () {
    const { modifier } = this.props

    return (
      <LogoWrapper modifier={checkIfValueIsAllowedOrSetDefault(modifier, allowedModifiers, 'sm')}>
        <Link href='/'>
          <LazyImage src={logo} />
        </Link>
      </LogoWrapper>
    )
  }
}
