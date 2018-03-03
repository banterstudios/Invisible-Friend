import React, { PureComponent } from 'react'
import Title from '../../Typography/Title'
import FormGroup from '../../FormComponents/FormGroup'
import DropZoneInput from '../../FormComponents/DropZoneInput'
import glamorous from 'glamorous'
import { reduxForm, Field } from 'redux-form'
import PropTypes from 'prop-types'
import SubmitButton from '../../FormComponents/SubmitButton'

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
    submitting: PropTypes.bool
  }

  render () {
    const { handleSubmit, submitting } = this.props

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
              <StyledCol className='col-md-6'>
                <Field
                  component={DropZoneInput}
                  title='Drop your mates face here'
                  successTitle='We now have your mates head'
                  name='imageDropZone'
                  allowedTypes={['image/png', 'image/gif', 'image/jpg', 'image/jpeg']}
                />
              </StyledCol>
              <div className='col-md-6'>
                <Field
                  component={DropZoneInput}
                  title='Drop your best voice here'
                  successTitle='We have your voice... but damn really?'
                  name='audioDropZone'
                  allowedTypes={['audio/mp3', 'audio/mpeg3', 'audio/ogg', 'audio/mpeg', 'audio/wav']}
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
      </Form>
    )
  }
}
