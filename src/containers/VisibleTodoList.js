import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import TodoActions from '../redux/todos'
import { VisibilityFilters } from '../constants'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos.todos, state.filters.filter),
  allTodoCount: state.todos.todos.length
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(TodoActions.toggleTodo(id)),
  removeTodo: id => dispatch(TodoActions.removeTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
