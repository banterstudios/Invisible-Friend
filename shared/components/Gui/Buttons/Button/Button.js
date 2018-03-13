import React, { Component } from 'react'

import PropTypes from 'prop-types'

import glamorous from 'glamorous'

import { isFunction, omit } from '../../../../utils/objectUtils'

const StyledButton = glamorous.button(({ theme: { formBorderRadius, primaryButtonBg, fontSizeText, fontSecondary, colorTextPrimary }, disabled }) => ({
  position: 'relative',
  width: '100%',
  background: primaryButtonBg,
  opacity: (disabled ? 0.5 : 1),
  border: 'none',
  fontSize: fontSizeText,
  borderRadius: formBorderRadius,
  color: colorTextPrimary,
  fontFamily: fontSecondary,
  minHeight: '50px',
  transition: 'opacity .4s ease-out',
  '&:hover, &:visited, &:active, &:focus': {
    appearance: 'none',
    outline: 'none'
  },
  '&:hover': {
    opacity: 0.8
  },
  '&:disabled': {
    cursor: 'not-allowed'
  }
}))

export default class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.any,
    disabled: PropTypes.bool
  }

  handleClick = (e) => {
    const { onClick, disabled } = this.props

    if (isFunction(onClick) && !disabled) {
      onClick()
    }
  }

  render () {
    const {
      children,
      ...rest
    } = this.props

    const buttonProps = omit(rest, ['onClick'])

    return (
      <StyledButton onClick={this.handleClick} {...buttonProps}>
        {children}
      </StyledButton>
    )
  }
}
