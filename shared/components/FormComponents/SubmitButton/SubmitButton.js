import React, { Component } from 'react'
import Button from '../../Gui/Buttons/Button'
import Spinner from '../../Common/Loaders/Spinner'

export default class SubmitButton extends Component {
  render () {
    const { children, submitting, disabled } = this.props

    return (
      <Button type='submit' disabled={disabled}>
        {
          submitting
            ? <Spinner />
            : children
        }
      </Button>
    )
  }
}
