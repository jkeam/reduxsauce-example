import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import TodoFilter from './TodoFilter'

const TodoList = ({ todos, toggleTodo, removeTodo, allTodoCount }) => (
  <section className="section">
    {allTodoCount > 0 &&
      <div className="card article">
        <div className="card-content">
          <div className="content article-body">
            <h1 className="title">All Todos</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {todos.map(todo =>
                  <Todo
                    key={todo.id}
                    {...todo}
                    onClick={() => toggleTodo(todo.id)}
                    removeTodo={() => removeTodo(todo.id)}
                  />
                )}
              </tbody>
            </table>
            <TodoFilter />
          </div>
        </div>
      </div>
    }
  </section>

)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  allTodoCount: PropTypes.number.isRequired
}

export default TodoList
