import React, { Component } from "react"
import FormV2Return from './FormV2Return'

class App extends Component {
	constructor() {
		super()
		this.state = {
			firstName: "",
			lastName: "",
			age: "",
			gender: "",
			destination: "",
			diet: {
				isVegan: false,
				isKosher: false,
				isLactose: false
			}
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		const { name, value, type, checked } = event.target
		type === "checkbox" ? 
		this.setState(prevState => { 
			return {
				diet: { ...prevState, [name]: checked } 
			}
		}
	)
			 :
			 this.setState({ [name]: value })
	}

	render() {
		return (
		<FormV2Return 
		handleChange={this.handleChange}
		data={this.state}
		/>
		)
	
	}
}

export default App
