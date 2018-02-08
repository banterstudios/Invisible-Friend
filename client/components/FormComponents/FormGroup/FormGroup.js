/* eslint-disable no-unused-vars */
import React from 'react'
/* eslint-enable no-unused-vars */

import PropTypes from 'prop-types'

import glamorous from 'glamorous'

const FormGroup = glamorous.div(({ modifier }) => ({
  position: 'relative',
  width: '100%',
  marginBottom: (modifier === 'sm') ? '5px' : (modifier === 'lg') ? '30px' : '15px',
  ':last-child': {
    marginBottom: 0
  }
}))

FormGroup.propTypes = {
  children: PropTypes.any
}

export default FormGroup
