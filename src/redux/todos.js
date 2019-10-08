import { createActions, createReducer } from 'reduxsauce'

const { Types, Creators } = createActions({
  addTodo: ['id', 'text'],
  toggleTodo: ['id'],
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

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_TODO]: addTodo,
  [Types.TOGGLE_TODO]: toggleTodo
})

