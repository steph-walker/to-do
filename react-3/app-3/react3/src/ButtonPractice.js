
import React from 'react'
import randomColor from 'randomcolor'




class App extends React.Component {
	constructor() {
		super()
		this.state = {
			count: 0,
			color: ""
		}
		this.increment = this.increment.bind(this)
		this.decrement = this.decrement.bind(this)
	}
	increment() {
		// console.log("You clicked the bttn")
		//anytime you want to change state you call setState
		//below is one example
		//Example 1 == this.setState({count: 1})

		//prevState remembers the previous state or number and adds 
		//one to it

		this.setState(prevSate => {
			return {
				count: prevSate.count + 1,
				color: randomColor()
			}
		})
	}

	decrement() {
		this.setState(prevSate => {
			return {
				count: prevSate.count - 1,
				color: randomColor()
			}
		})
	}

	//example of how to use component did update method
	// componentDidUpdate(prevState) {
	// 	if (prevState.count !== this.state.count) {
	// 		const newColor = randomcolor()
	// 		this.setState({ color: newColor })

	// 	}

	// }



	render() {
		return (
			<div>
				<h1 style={{ color: this.state.color }}>{this.state.count}</h1>
				<button onClick={this.increment}>Add</button>
				<button onClick={this.decrement}>Subtract</button>
			</div>
		)
	}
}

export default App

//for all child components under this file
//if you want to pass state or data to a child file
//react will keep everything updated