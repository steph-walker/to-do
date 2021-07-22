import React from 'react'

function handleClick() {
    console.log("Checked!")
}

function Items(props) {
    return (
        <div className="each-item">
        <input type="checkbox"  onChange={handleClick}/>
        <p>{props.item.text}</p>
        
        </div>
    )
}

export default Items

//<input type="checkbox" checked={props.item.completed} />