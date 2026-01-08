import React from 'react'
import Hoc from './HOC'
import SearchUsers from './HOCUser'
import SearchProducts from './HOCProduct'

//TodoList Component
const TodoList = ({ data }) => {
  let todos = data.map((todo) => {
    return <div key={todo.userId}>{todo.title}</div>
  })
  return <div>{todos}<hr /><SearchUsers /><hr/><SearchProducts/></div>
}
const TodosItems = Hoc(TodoList, 'todos')
export default TodosItems

