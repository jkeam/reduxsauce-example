import { createActions, createReducer } from 'reduxsauce'

const { Types, Creators } = createActions({
  reset: null,
  addTodo: ['id', 'text'],
  toggleTodo: ['id'],
  removeTodo: ['id']
})

export const TodosTypes = Types
export default Creators;

export const INITIAL_STATE = {
  todos: []
}

const addTodo = (state = INITIAL_STATE, { id, text }) => {
  return {
    todos: [
      ...state.todos,
      {
        id: id,
        text,
        completed: false
      }
    ]
  }
}

const toggleTodo = (state = INITIAL_STATE, { id }) => {
  return {
    todos: (state.todos || []).map(todo =>
      (todo.id === id)
        ? {...todo, completed: !todo.completed}
        : todo
    )
  }
}

const removeTodo = (state = INITIAL_STATE, { id }) => ({
  todos: (state.todos || []).filter(todo => todo.id !== id)
})

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_TODO]: addTodo,
  [Types.TOGGLE_TODO]: toggleTodo,
  [Types.REMOVE_TODO]: removeTodo
})

