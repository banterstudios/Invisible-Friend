import React from 'react'
import DropZone from '../../Gui/DropZone'
import { Div } from 'glamorous'
import FormMessage from '../FormMessage'

export default (props) => (
  <Div position='relative' width='100%'>
    <DropZone
      title={props.title}
      successTitle={props.successTitle}
      allowedTypes={props.allowedTypes}
      hasFiles={!!props.input.value}
      onDrop={(filesToUpload, e) => (props.input.onChange(filesToUpload))}
    />
    {props.touched && ((props.error && <FormMessage type='error'>{props.error}</FormMessage>) || (props.warning && <FormMessage type='warning'>{props.warning}</FormMessage>))}
  </Div>
)
