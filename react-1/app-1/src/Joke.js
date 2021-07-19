import React from 'react'

function Joke(props) {

return (
    <div>
        <p style={{color: props.question ? "black" : "red"}}>Question: {props.question}</p>
        <p>Answer: {props.answer}</p>
        <br></br>

    </div>
)

}

export default Joke
//<br> = break or new line