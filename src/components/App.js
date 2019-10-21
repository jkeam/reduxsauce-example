import React from 'react'
import Title from './Title'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Reset from '../containers/Reset'

const App = () => (
  <div className="container">
    <Title />
    <AddTodo />
    <VisibleTodoList />
    <Reset />
  </div>
)

export default App
