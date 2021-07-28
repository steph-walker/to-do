import React from 'react'

class Form extends React.Component {

	constructor() {
		super()
		this.state = {
			firstName: "",
			lastName: ""
		}
		this.handleInput = this.handleInput.bind(this)
	}

	handleInput(event) {
		const {name, value} = event.target
		this.setState({
			//[event.target.name]: event.target.value
			[name] : value
		})
	}

	render() {

		return (
			<form>
				<input 
				type="text" 
				name="firstName"
				placeholder="First Name" 
				onChange={this.handleInput}
				value={this.state.firstName}/>
				<h1>{this.state.firstName}</h1>

				<input 
				type="text" 
				name="lastName" 
				placeholder="Last Name" 
				onChange={this.handleInput}
				value={this.state.lastName}/>
				<h1>{this.state.lastName}</h1>
			</form>
		)
	}
}

export default Form

//example of how to handle input on a form
//you can captcher keystrokes from the user and output it