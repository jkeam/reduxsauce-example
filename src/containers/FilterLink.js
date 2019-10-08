import { connect } from 'react-redux'
import VisibilityFilterActions from '../redux/visibilityFilter';
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  filter: ownProps.filter,
  visibilityFilter: state.filters.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(VisibilityFilterActions.setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
