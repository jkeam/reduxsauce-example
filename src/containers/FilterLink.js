import { connect } from 'react-redux'
import VisibilityFilterActions from '../redux/filters';
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  filter: ownProps.filter,
  stateFilter: state.filters.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(VisibilityFilterActions.setFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
