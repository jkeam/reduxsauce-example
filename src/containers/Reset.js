import React from 'react';
import { connect } from 'react-redux'
import TodoActions from '../redux/todos'
import FilterActions from '../redux/filters'

const Reset = ({ reset }) => (
  <div>
    <button className="button is-secondary" onClick={reset}>
      Reset Everything
    </button>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  reset: () => {
    dispatch(TodoActions.reset())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reset)

