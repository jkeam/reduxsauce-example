import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, removeTodo, completed, text }) => (
  <tr>
    <td
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </td>
    <td>
      <button className="button is-secondary" onClick={removeTodo}>
        <span class="icon">
          <i class="fas fa-trash"></i>
        </span>
      </button>
    </td>
  </tr>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
