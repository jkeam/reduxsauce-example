import { combineReducers } from 'redux'
import { reducer as todosReducer } from './todos'
import { reducer as filterReducer } from './filters';

export default combineReducers({
  todos: todosReducer,
  filters: filterReducer
})
