import React from 'react'

function struct(props) {

    return (
        <div>
            <h2>{props.product.name}</h2>
            <p>{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
            <p>{props.product.description}</p>
    
        </div>
    )
    
    }
    
    export default struct

    //toLocaleString("en-US", { style: "currency", currency: "USD" })
    //the above creates the input as currency