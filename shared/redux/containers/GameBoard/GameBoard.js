import Board from '../../../components/Game/Board'

import { connect } from 'react-redux'

const mapStateToProps = ({ game }, ownProps) => ({
  game
})

export default connect(mapStateToProps)(Board)
