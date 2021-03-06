import React, { PureComponent } from 'react'
import Title from '../../Typography/Title'
import FormGroup from '../../FormComponents/FormGroup'
import TextInput from '../../FormComponents/TextInput'
import DropZoneInput from '../../FormComponents/DropZoneInput'
import glamorous from 'glamorous'
import { reduxForm, Field } from 'redux-form'
import PropTypes from 'prop-types'
import SubmitButton from '../../FormComponents/SubmitButton'
import { Redirect } from 'react-router'
import { allowedImageTypes, allowedAudioTypes } from '../../../consts/forms/gameSignUpForm'
import { FIELD_GAME_NAME_VALIDATION } from '../../../consts/forms'

const StyledCol = glamorous.div(({ theme: { mobileQuery } }) => ({
  [mobileQuery]: {
    marginBottom: '30px'
  }
}))

const Form = glamorous.form({
  position: 'relative',
  margin: 0
})

@reduxForm({
  form: 'gameSignUpForm'
})
export default class SignUpForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func,
    submitting: PropTypes.bool,
    submitSucceeded: PropTypes.bool,
    redirectUrl: PropTypes.string
  }

  render () {
    const { handleSubmit, submitting, submitSucceeded, redirectUrl } = this.props

    return (
      <Form onSubmit={handleSubmit}>
        <div className='container'>
          <FormGroup modifier='lg'>
            <div className='row'>
              <div className='col'>
                <Title type='h1'>
                  Invisible Friend
                </Title>
              </div>
            </div>
          </FormGroup>

          <FormGroup modifier='lg'>
            <div className='row'>
              <div className='col'>
                <Title type='h3'>
                  Upload a picture of your mate and a sound clip of yourself and use that to determine where ya fucking mates head is at!
                </Title>
              </div>
            </div>
          </FormGroup>

          <FormGroup modifier='lg'>
            <div className='row'>
              <div className='col-12'>
                <Title type='h3' css={{ textAlign: 'center' }}>
                  What's the name of your game?
                </Title>
              </div>
              <div className='col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3' style={{ marginTop: '20px' }}>
                <Field
                  validate={[ FIELD_GAME_NAME_VALIDATION ]}
                  component={TextInput}
                  name='gameName'
                />
              </div>
            </div>
          </FormGroup>

          <FormGroup modifier='lg'>
            <div className='row'>
              <StyledCol className='col-md-6'>
                <Field
                  component={DropZoneInput}
                  title='Drop your mates face here'
                  successTitle='We now have your mates head'
                  name='imageDropZone'
                  allowedTypes={allowedImageTypes}
                />
              </StyledCol>
              <div className='col-md-6'>
                <Field
                  component={DropZoneInput}
                  title='Drop your best voice here'
                  successTitle='We have your voice... but damn really?'
                  name='audioDropZone'
                  allowedTypes={allowedAudioTypes}
                />
              </div>
            </div>
          </FormGroup>

          <FormGroup>
            <div className='row'>
              <div className='col-md-4 offset-md-4'>
                <SubmitButton
                  submitting={submitting}
                >
                  Submit
                </SubmitButton>
              </div>
            </div>
          </FormGroup>
        </div>
        { submitSucceeded && <Redirect push to={redirectUrl} /> }
      </Form>
    )
  }
}
