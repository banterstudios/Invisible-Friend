import React, { PureComponent } from 'react'
import * as glamor from 'glamor'
import glamorous from 'glamorous'

const lineOneAnim = glamor.css.keyframes({
  '0%': { transform: `rotateX(35deg) rotateY(-45deg) rotateZ(0deg)` },
  '100%': { transform: `rotateX(35deg) rotateY(-45deg) rotateZ(360deg)` }
})

const lineTwoAnim = glamor.css.keyframes({
  '0%': { transform: `rotateX(50deg) rotateY(10deg) rotateZ(0deg)` },
  '100%': { transform: `rotateX(50deg) rotateY(10deg) rotateZ(360deg)` }
})

const lineThreeAnim = glamor.css.keyframes({
  '0%': { transform: `rotateX(35deg) rotateY(55deg) rotateZ(0deg)` },
  '100%': { transform: `rotateX(35deg) rotateY(55deg) rotateZ(360deg)` }
})

const Loader = glamorous.div(() => ({
  position: 'relative',
  display: 'inline-block',
  width: '26px',
  height: '26px',
  borderRadius: '50%',
  perspective: '320px'
}))

const lineStyles = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  borderRadius: '50%'
}

const LineOne = glamorous.div(({ theme: { loaderPrimaryBg } }) => ({
  left: '0',
  top: '0',
  animation: `${lineOneAnim} 1.15s linear infinite`,
  borderBottom: `1px solid ${loaderPrimaryBg}`,
  ...lineStyles
}))

const LineTwo = glamorous.div(({ theme: { loaderPrimaryBg } }) => ({
  right: '0',
  top: '0',
  animation: `${lineTwoAnim} 1.15s linear infinite`,
  borderRight: `1px solid ${loaderPrimaryBg}`,
  ...lineStyles
}))

const LineThree = glamorous.div(({ theme: { loaderPrimaryBg } }) => ({
  right: '0',
  bottom: '0',
  animation: `${lineThreeAnim} 1.15s linear infinite`,
  borderTop: `1px solid ${loaderPrimaryBg}`,
  ...lineStyles
}))

export default class Spinner extends PureComponent {
  render () {
    return (
      <Loader>
        <LineOne />
        <LineTwo />
        <LineThree />
      </Loader>
    )
  }
}
