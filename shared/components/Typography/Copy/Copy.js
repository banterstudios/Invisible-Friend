import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

const Paragraph = glamorous.p(({ theme: { fontSecondary, colorTextPrimary, fontSizeText } }) => ({
  position: 'relative',
  fontFamily: fontSecondary,
  color: colorTextPrimary,
  margin: 0,
  fontSize: fontSizeText,
  wordBreak: 'break-word'
}))

export default class Copy extends PureComponent {
  static propTypes = {
    children: PropTypes.any
  }

  render () {
    const { children, ...rest } = this.props

    return (
      <Paragraph {...rest}>
        {children}
      </Paragraph>
    )
  }
}
