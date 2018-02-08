/* eslint-disable no-unused-vars */
import React from 'react'
/* eslint-enable no-unused-vars */

import glamorous from 'glamorous'

const Overlay = glamorous.div(({ theme: { overlayPrimaryBg }, isOpen }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  background: overlayPrimaryBg,
  width: '100%',
  height: '100%',
  opacity: 0.4
}))

export default Overlay
