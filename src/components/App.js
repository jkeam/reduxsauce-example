import React from 'react'
import Title from './Title'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div className="container">
    <Title />
    <AddTodo />
    <VisibleTodoList />
  </div>
)

export default App
