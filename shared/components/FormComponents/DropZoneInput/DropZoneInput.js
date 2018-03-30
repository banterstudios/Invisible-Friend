import React, { Fragment } from 'react'
import DropZone from '../../Gui/DropZone'
import FormMessage from '../FormMessage'

export default (props) => (
  <Fragment>
    <DropZone
      title={props.title}
      successTitle={props.successTitle}
      allowedTypes={props.allowedTypes}
      hasFiles={!!props.input.value}
      onDrop={(filesToUpload, e) => (props.input.onChange(filesToUpload))}
    />
    {props.meta.touched && ((props.meta.error && <FormMessage error>{props.meta.error}</FormMessage>) || (props.meta.warning && <FormMessage warning>{props.meta.warning}</FormMessage>))}
  </Fragment>
)
