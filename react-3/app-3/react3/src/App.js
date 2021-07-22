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
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState (prevState => {
            const updated = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updated
            }
        })
		
	}
    
    render() {
        const todoItems = this.state.todos.map(item => 
        <TodoItem key={item.id} item={item} onChange={this.handleChange}/>)
        
        return (
            <div>
            <div className="todo-list">
                {todoItems }
            </div>

            <div>
                <Button />
            </div>
            </div>
        )    
    }
}

export default App