import React from 'react'
import todosData from './todosData'
import TodoStruct from './TodoStruct'


class ToDo extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
  }

  render() {
    const items = this.state.todos.map((things) => {
      return (
        <TodoStruct key={things.id} things={things}/>
      )
    })
    const i = this.state.todos.map(item => <TodoStruct key={item.id} item={item} />)

    return (
     <div className="each-item">
       <h1>Version 2 of to-do list</h1>
       {i}
       {items}
     </div>
    )
  }
}

export default ToDo