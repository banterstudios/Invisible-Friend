import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'
import { checkIfValueIsAllowedOrSetDefault } from '../../../utils/objectUtils'

export const titleFactory = (type) => {
  return glamorous[type](({ theme: { fontSecondary, colorTextPrimary } }) => ({
    position: 'relative',
    fontFamily: fontSecondary,
    color: colorTextPrimary,
    margin: 0
  }))
}

const allowedTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

export default class Title extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
    type: PropTypes.string
  }

  render () {
    const { children, type, ...rest } = this.props

    const titleType = checkIfValueIsAllowedOrSetDefault(type, allowedTypes, 'h1')

    const Heading = titleFactory(titleType)

    return (
      <Heading {...rest}>
        { children }
      </Heading>
    )
  }
}
