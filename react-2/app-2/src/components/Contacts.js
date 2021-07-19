import React from 'react'

function Names(props) {

    return (
        <div className="contacts">
            <img src={props.imgUrl} alt="cat-images"/>
            <h3>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
           
        </div>
    )
}

export default Names