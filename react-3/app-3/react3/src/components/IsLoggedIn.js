import React from 'react'

class Logged extends React.Component {

	constructor() {
		super()
		this.state = {
			isLoggedIn: false
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		this.setState(prevState => {
			return {
				isLoggedIn: !prevState.isLoggedIn
			}
		})
	}

	render() {
		let text = this.state.isLoggedIn ? "Log Out" : "Log In"
		let msg = this.state.isLoggedIn ? "Logged In" : "Logged Out"

		return (
			<div>
				<p>---------------------------------------------------------------------------------------------------------------------------------</p>
				<h1 >Example of how to work with logged in and out</h1>
				<button onClick={this.handleClick}>Click to {text}</button>
				<h3>You are currently {msg}</h3>
			</div>

		)
	}
}

	export default Logged


//in Set State you can provide it 2 things
// new state and old state(prevState)
