import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import glamorous, { Div } from 'glamorous'
import Title from '../../Typography/Title'
import { handleFiles } from '../../../utils/fileUtils'
import { errorLog } from '../../../utils/log'
import {
  upload as uploadImg,
  uploadSuccess as uploadSuccessImg
} from '../../../consts/images'
import LazyImage from '../LazyImage'

const Container = glamorous.div(({ disabled }) => ({
  position: 'relative',
  width: '100%',
  height: 'auto',
  opacity: (disabled ? 0.4 : 1),
  transition: 'opacity 0.4s ease-out'
}))

const DropMat = glamorous.div(({
  isDragOver,
  hasFiles,
  theme: {
    dropZoneBorderColor,
    dropZoneHoverBgColor,
    dropZoneSuccessBorderColor,
    dropZoneSuccessBgColor
  }
}) => ({
  position: 'relative',
  width: '100%',
  maxWidth: '750px',
  padding: '10px',
  border: `2px dashed ${(hasFiles && !isDragOver) ? dropZoneSuccessBorderColor : dropZoneBorderColor}`,
  minHeight: '200px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  background: (isDragOver ? dropZoneHoverBgColor : hasFiles ? dropZoneSuccessBgColor : 'transparent'),
  transition: 'background 0.4s ease-out, border 0.4s ease-out'
}))

export default class DropZone extends PureComponent {
  static propTypes = {
    disabled: PropTypes.bool,
    title: PropTypes.string,
    successTitle: PropTypes.string,
    allowedTypes: PropTypes.arrayOf(PropTypes.string),
    onDragEnter: PropTypes.func,
    onDragLeave: PropTypes.func,
    onDragOver: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrop: PropTypes.func,
    onClick: PropTypes.func,
    onFileSuccess: PropTypes.func,
    onFileError: PropTypes.func,
    hasFiles: PropTypes.bool
  }

  static defaultProps = {
    title: 'Drop here'
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
      errorLog(error)
      onFileError && onFileError(error)
    }

    if (this.state.isDragOver) {
      this.setState({ isDragOver: false })
    }
  }

  onClick = () => {
    if (this.inputRef) {
      this.inputRef.click()
    }

    if (this.props.onClick) {
      this.props.onClick()
    }
  }

  addInputRef = (ref) => (this.inputRef = ref)

  render () {
    const { disabled, title, successTitle, hasFiles, allowedTypes } = this.props
    const { isDragOver } = this.state

    return (
      <Container
        disabled={disabled}
        aria-disabled={disabled}
      >
        <DropMat
          hasFiles={hasFiles}
          isDragOver={isDragOver}
          onClick={this.composeHandlers(this.onClick)}
          onDragStart={this.composeHandlers(this.onDragStart)}
          onDragEnter={this.composeHandlers(this.onDragEnter)}
          onDragOver={this.composeHandlers(this.onDragOver)}
          onDragLeave={this.composeHandlers(this.onDragLeave)}
          onDrop={this.composeHandlers(this.onDrop)}
        >
          <Div maxWidth='80px' marginBottom='20px'>
            <LazyImage src={(hasFiles && !isDragOver) ? uploadSuccessImg : uploadImg} />
          </Div>

          <Title type='h2' css={{ textAlign: 'center' }}>
            {
              (hasFiles && !isDragOver && successTitle) ? (
                successTitle
              ) : title
            }
          </Title>
        </DropMat>
        <input
          accept={allowedTypes.join(',')}
          ref={this.addInputRef}
          onChange={this.composeHandlers(this.onDrop)}
          type='file'
          style={{ display: 'none' }}
          autoComplete='off'
          hidden
        />
      </Container>
    )
  }
}
