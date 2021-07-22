import React from 'react'

function handleClick() {
    console.log("Clicked!!!!")
}

function Events() {
    return (
        <div>
            <img onMouseOver={() => console.log("you hovered over the img")} src="https://www.fillmurray.com/200/100" alt="actor"/>
            <br />
            <br />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default Events