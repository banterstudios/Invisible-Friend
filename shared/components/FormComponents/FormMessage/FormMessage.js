import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FadeSlide from '../../Transitions/FadeSlide'
import glamorous from 'glamorous'

const Wrapper = glamorous.div(({ theme: { messagePrimaryColor, fontSizeText, fontSecondary } }) => ({
  position: 'relative',
  padding: '10px 0',
  fontFamily: fontSecondary,
  color: messagePrimaryColor,
  fontSize: fontSizeText
}))

export default class FormMessage extends PureComponent {
  static propTypes = {
    type: PropTypes.string,
    children: PropTypes.string
  }

  render () {
    const { children } = this.props

    return (
      <FadeSlide direction='up' isActive>
        <Wrapper>
          {children}
        </Wrapper>
      </FadeSlide>
    )
  }
}
