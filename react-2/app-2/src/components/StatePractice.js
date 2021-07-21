import React from 'react'

 class states extends React.Component {
     constructor() {
         super()
         this.state = {
             answer: "Stephanie"
         }
     }

     render() {
         return (
             <div>
                 <p> What is your name? {this.state.answer}</p>
                 <p>This is an example of using states</p>
                 {/* <ChildFile answer={this.state.answer} /> */}
             </div>
         )
     }
 }

 export default states

 //we can pass this data int the constructor to another file that 
 //is a child of StatePractice
 //you need to have `this` when you have a constructor
 //an example is above in ChildFile component
 //that is how you would pass props to another file
 
/*
 class App extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "we",
            age: 10
        }
    }
    render() {
    return (
        <div>
            <h1>{this.state.name}</h1>
            <h3>{this.state.age} years old</h3>
        </div>
    )    
 }
}   

export default App
*/