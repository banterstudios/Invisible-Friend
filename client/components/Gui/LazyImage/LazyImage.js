import React, { Component } from 'react'

import inView from '../../Common/InView'

import PropTypes from 'prop-types'

import { getImage } from '../../../utils/imageUtils'

import glamorous from 'glamorous'

import Fade from '../../Transitions/Fade'

const ImageContainer = glamorous.div(() => ({
  position: 'relative'
}))

const Image = glamorous.img({
  position: 'relative',
  width: '100%',
  verticalAlign: 'top'
})

const BgImage = glamorous.div(({ bgSize, bgPos, bgRepeat, bgImage }) => ({
  position: 'relative',
  width: '100%',
  backgroundPosition: bgPos,
  backgroundSize: bgSize,
  backgroundRepeat: bgRepeat,
  backgroundImage: `url('${bgImage}')`
}))

@inView({ once: true })
export default class LazyImage extends Component {
  static PropTypes = {
    src: PropTypes.string,
    useBgImage: PropTypes.bool,
    alt: PropTypes.string,
    bgPos: PropTypes.string,
    bgSize: PropTypes.string,
    bgRepeat: PropTypes.string,
    isVisible: PropTypes.bool
  }

  static defaultProps = {
    useBgImage: false,
    bgPos: 'center',
    bgSize: 'cover',
    bgRepeat: 'no-repeat'
  }

  constructor (props) {
    super(props)

    this.state = {
      loaded: false,
      error: false,
      isLoading: false
    }

    this.imagePromise = null
  }

  componentWillUnmount () {
    this.cancelFetchIfFetching()
  }

  cancelFetchIfFetching () {
    if (this.imagePromise && this.imagePromise.cancel) {
      this.imagePromise.cancel()
      this.imagePromise = null
    }
  }

  handleImageLoad = () => {
    this.setState({
      loaded: true,
      isLoading: false,
      error: false
    })
  }

  handleImageError = () => {
    this.setState({
      loaded: false,
      error: true,
      isLoading: false
    })
  }

  fetchImage (src = this.props.src) {
    const { loaded, isLoading } = this.state

    if (!src || loaded || isLoading) {
      return false
    }

    this.imagePromise = getImage(src)
      .then(this.handleImageLoad)
      .catch(this.handleImageError)
  }

  shouldComponentUpdate ({ isVisible }, { loaded }) {
    return (loaded && isVisible)
  }

  componentWillReceiveProps ({ src, isVisible }) {
    if (src !== this.props.src || isVisible) {
      this.fetchImage(src)
    }
  }

  renderImage () {
    const {
      useBgImage,
      children,
      src,
      alt,
      bgPos,
      bgSize,
      bgRepeat,
      ...rest
    } = this.props

    const {
      loaded,
      error,
      isLoading
    } = this.state

    if (!loaded || error || isLoading) {
      return null
    }

    return (
      <ImageContainer>
        <Fade isActive={loaded}>
          {
            useBgImage
              ? (
                <BgImage bgImage={src} bgPos={bgPos} bgSize={bgSize} bgRepeat={bgRepeat} {...rest}>
                  { children }
                </BgImage>
              )
              : (
                <Image src={src} alt={alt} {...rest}>
                  { children }
                </Image>
              )
          }
        </Fade>
      </ImageContainer>
    )
  }

  render () {
    return this.renderImage()
  }
}
