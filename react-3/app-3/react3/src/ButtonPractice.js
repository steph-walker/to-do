import React from 'react'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			count:0
		}
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick() {
		// console.log("You clicked the bttn")
		//anytime you want to change state you call setState
		//below is one example
		//Example 1 == this.setState({count: 1})

		//prevState remembers the previous state or number and adds 
		//one to it

		this.setState(prevSate => {
			return {
				count: prevSate.count + 1
			}
		})
	}



	render() {
		return(
			<div>
				<h1>{this.state.count}</h1>
				<button onClick={this.handleClick}>Click</button>
			</div>
		)
	}
}

export default App

//for all child components under this file
//if you want to pass state or data to a child file
//react will keep everything updated