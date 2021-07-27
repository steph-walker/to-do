import React from "react"

function TodoItem(props) {

    const comStyling = {
        fontStyle: "italic",
        color: "#FF33A8",
        textDecoration: "line-through"
    }

    return (
        <div className="todo-item">
            <input type="checkbox" 
            checked={props.item.completed}
            onChange={() => props.handleChange(props.item.id)}/>
            
            <p style={props.item.completed ? comStyling: null}>{props.item.text}</p>
        </div>
    )
}

export default TodoItem