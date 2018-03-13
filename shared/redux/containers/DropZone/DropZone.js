import DropZone from '../../../components/Gui/DropZone'
import { connect } from 'react-redux'
import { addFiles } from '../../modules/dropZoneModule'

const mapStateToProps = ({ dropZone }, { stateName }) => ({
  ...dropZone[stateName] || {}
})

const mapDispatchToProps = (dispatch, { stateName: key }) => ({
  onDrop: (files) => {
    return dispatch(addFiles({ files, key }))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropZone)
