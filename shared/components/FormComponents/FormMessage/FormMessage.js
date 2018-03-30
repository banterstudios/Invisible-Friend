import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FadeSlide from '../../Transitions/FadeSlide'
import glamorous from 'glamorous'

const Wrapper = glamorous.div(({
  theme: {
    messageWarningColor,
    messageWarningBgColor,
    messageErrorColor,
    messageErrorBgColor,
    fontSizeText,
    fontSecondary
  },
  warning
}) => ({
  display: 'inline-block',
  width: 'auto',
  position: 'relative',
  padding: '15px',
  borderRadius: '10px',
  fontFamily: fontSecondary,
  color: warning ? messageWarningColor : messageErrorColor,
  backgroundColor: warning ? messageWarningBgColor : messageErrorBgColor,
  fontSize: fontSizeText,
  overflow: 'visible',
  marginTop: '20px',
  ':before': {
    content: `''`,
    position: 'absolute',
    width: '20px',
    height: '20px',
    top: '-10px',
    left: '20px',
    backgroundColor: 'inherit',
    transform: 'rotate(45deg)'
  }
}))

export default class FormMessage extends PureComponent {
  static propTypes = {
    error: PropTypes.bool,
    warning: PropTypes.bool,
    children: PropTypes.string
  }

  static defaultProps = {
    error: true
  }

  render () {
    const { children, warning } = this.props

    return (
      <FadeSlide direction='up' isActive>
        <Wrapper warning={warning}>
          {children}
        </Wrapper>
      </FadeSlide>
    )
  }
}
