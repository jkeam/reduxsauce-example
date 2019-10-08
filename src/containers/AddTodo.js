import React, { useState } from 'react';
import { connect } from 'react-redux'
import TodoActions from '../redux/todos'
const uuidv1 = require('uuid/v1')

const isValid = (text) => (text && text.trim())
const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');
  return (
    <section className="section">
      <div className="card article">
        <div className="card-content">
          <div className="content article-body">
            <h1 className="title">New Todo</h1>
            <form onSubmit={e => {
              e.preventDefault()
              if (!isValid(text)) {
                return
              }
              addTodo(uuidv1(), text)
              setText('')
            }}>
              <div className="field">
                <label className="label">Item</label>
                <div className="control">
                  <input className="input" type="text" value={text} onChange={(e) => setText(e.currentTarget.value)} />
                </div>
              </div>

              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-primary" type="submit">Submit</button>
                </div>
                <div className="control">
                  <button className="button is-text" onClick={() => setText('')} disabled={!isValid(text)}>Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
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

