import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"
import './style.css'
import Button from './ButtonPractice'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)
        
        return (
            <div>
            <div className="todo-list">
                {todoItems}
            </div>

            <div>
                <Button />
            </div>
            </div>
        )    
    }
}

export default App