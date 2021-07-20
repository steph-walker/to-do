import React from 'react'

function Items(props) {
    return (
        <div className="each-item">
        <input type="checkbox" checked={props.item.completed} />
        <p>{props.item.text}</p>
        
        </div>
    )
}

export default Items