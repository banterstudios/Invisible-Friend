/* eslint-disable no-unused-vars */
import React from 'react'
/* eslint-enable no-unused-vars */

import PropTypes from 'prop-types'

import glamorous from 'glamorous'

const FormGroup = glamorous.div(({
  modifier,
  theme: {
    minTabletQuery
  }
}) => ({
  position: 'relative',
  width: '100%',
  marginBottom: '20px',
  ':last-child': {
    marginBottom: 0
  },
  [minTabletQuery]: {
    marginBottom: (modifier === 'sm') ? '5px' : (modifier === 'lg') ? '40px' : '15px'
  }
}))

FormGroup.propTypes = {
  children: PropTypes.any
}

export default FormGroup
