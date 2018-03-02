import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import glamorous, { Div } from 'glamorous'
import Title from '../../Typography/Title'
import { handleFiles } from '../../../utils/fileUtils'
import { error as consoleError } from '../../../utils/log'
import { upload as uploadImg } from '../../../consts/images'
import LazyImage from '../LazyImage'

const Container = glamorous.div(({ disabled }) => ({
  position: 'relative',
  width: '100%',
  height: 'auto',
  padding: '10px',
  opacity: (disabled ? 0.4 : 1),
  transition: 'opacity 0.4s ease-out'
}))

const DropMat = glamorous.div(({
  isDragOver,
  theme: {
    dropZoneBorderColor,
    dropZoneActiveBgColor
  }
}) => ({
  position: 'relative',
  width: '100%',
  maxWidth: '750px',
  padding: '10px',
  border: `2px dashed ${dropZoneBorderColor}`,
  minHeight: '200px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  background: isDragOver ? dropZoneActiveBgColor : 'transparent',
  transition: 'background 0.4s ease-out'
}))

export default class DropZone extends PureComponent {
  static propTypes = {
    disabled: PropTypes.bool,
    title: PropTypes.string,
    allowedTypes: PropTypes.arrayOf(PropTypes.string),
    onDragEnter: PropTypes.func,
    onDragLeave: PropTypes.func,
    onDragOver: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrop: PropTypes.func,
    onFileSuccess: PropTypes.func,
    onFileError: PropTypes.func
  }

  constructor (props) {
    super(props)

    this.state = {
      isDragOver: false
    }

    this.onDrop = this.onDrop.bind(this)
  }

  composeHandlers = (handler) => {
    if (this.props.disabled) {
      return null
    }

    return handler
  }

  onDragStart = (evt) => {
    evt.preventDefault()

    if (this.props.onDragStart) {
      this.props.onDragStart(evt)
    }
  }

  onDragEnter = (evt) => {
    evt.preventDefault()

    if (this.props.onDragEnter) {
      this.props.onDragEnter(evt)
    }
  }

  onDragOver = (evt) => {
    evt.preventDefault()

    if (this.props.onDragOver) {
      this.props.onDragOver(evt)
    }

    if (!this.state.isDragOver) {
      this.setState({ isDragOver: true })
    }
  }

  onDragLeave = (evt) => {
    evt.preventDefault()

    if (this.props.onDragLeave) {
      this.props.onDragLeave(evt)
    }

    if (this.state.isDragOver) {
      this.setState({ isDragOver: false })
    }
  }

  async onDrop (evt) {
    evt.preventDefault()

    const {
      allowedTypes,
      onDrop,
      onFileSuccess,
      onFileError
    } = this.props

    try {
      const files = await handleFiles(evt, allowedTypes)
      onDrop && onDrop(files)
      onFileSuccess && onFileSuccess(files)
    } catch (error) {
      consoleError(error)
      onFileError && onFileError(error)
    }

    if (this.state.isDragOver) {
      this.setState({ isDragOver: false })
    }
  }

  render () {
    const { disabled } = this.props
    const { isDragOver } = this.state

    return (
      <Container
        disabled={disabled}
        aria-disabled={disabled}
      >
        <DropMat
          isDragOver={isDragOver}
          onDragStart={this.composeHandlers(this.onDragStart)}
          onDragEnter={this.composeHandlers(this.onDragEnter)}
          onDragOver={this.composeHandlers(this.onDragOver)}
          onDragLeave={this.composeHandlers(this.onDragLeave)}
          onDrop={this.composeHandlers(this.onDrop)}
        >
          <Div maxWidth='80px' marginBottom='20px'>
            <LazyImage src={uploadImg} />
          </Div>

          <Title type='h2'>
            Drop here
          </Title>
        </DropMat>
      </Container>
    )
  }
}
