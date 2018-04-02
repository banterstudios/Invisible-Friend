import SignUpForm from '../../../components/Game/SignUpForm'

import { connect } from 'react-redux'

import { submitForm } from '../../modules/gameSignUp'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (event) => dispatch(submitForm(event))
})

export default connect(null, mapDispatchToProps)(SignUpForm)
