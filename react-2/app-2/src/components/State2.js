import React from 'react'


class App extends React.Component {

    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        let displayed

        if (this.state.isLoggedIn === true) {
            displayed = "yes"
        } else {
            displayed = "no"
        }

        return (
            <div>
                <h1>Are you online? {displayed} </h1>
            </div>
        )
    }
}

export default App

//if you want state in your component you need to add 
//the constructor with super