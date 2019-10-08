import React, { useState } from 'react';
import { connect } from 'react-redux'
import TodoActions from '../redux/todos'
const uuidv1 = require('uuid/v1')

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!text.trim()) {
          return
        }
        addTodo(uuidv1(), text)
        setText('')
      }}>
        <input value={text} onChange={(e) => setText(e.currentTarget.value)} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addTodo: (id, text) => dispatch(TodoActions.addTodo(id, text))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)

