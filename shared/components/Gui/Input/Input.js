/* eslint-disable no-unused-vars */
import React from 'react'
/* eslint-enable no-unused-vars */

import PropTypes from 'prop-types'

import glamorous from 'glamorous'

const Input = glamorous.input(({
  theme: {
    inputHighlight,
    inputBg,
    fontSizeText,
    fontSecondary,
    inputTextColor,
    inputPlaceholderColor,
    inputNormalBorderColor,
    formBorderRadius,
    inputSuccessBorderColor
  },
  error
}) => ({
  border: `1px solid ${error ? 'transparent' : inputSuccessBorderColor}`,
  borderRadius: formBorderRadius,
  padding: '15px',
  appearance: 'none',
  backgroundColor: inputBg,
  minHeight: '50px',
  transition: 'border .2s ease-out',
  width: '100%',
  fontFamily: fontSecondary,
  fontWeight: 600,
  fontSize: fontSizeText,
  color: inputTextColor,
  '&:focus, &:active': {
    outline: 'none',
    borderColor: error ? inputHighlight : inputSuccessBorderColor
  },
  '::placeholder': {
    color: inputPlaceholderColor
  }
}))

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onInput: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  tabIndex: PropTypes.number,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
}

export default Input
