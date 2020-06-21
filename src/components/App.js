import React from 'react'
import Title from './Title'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Reset from '../containers/Reset'
import ThemeChanger from '../containers/ThemeChanger'

const App = () => (
  <div className="container">
    <Title />
    <ThemeChanger />
    <AddTodo />
    <VisibleTodoList />
    <Reset />
  </div>
)

export default App
