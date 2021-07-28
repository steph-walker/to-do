import React from 'react'

class Form extends React.Component {

	constructor() {
		super()
		this.state = {
			firstWord: "",
			secondWord: "",
			isFriendly: false,
			gender: "",
			color: ""
		}
		this.handleInput = this.handleInput.bind(this)
	}

	handleInput(event) {
		const { name, value, type, checked } = event.target
		type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
	}

	render() {

		return (
			<form>
				<input
					type="text"
					name="firstWord"
					placeholder="First Word"
					onChange={this.handleInput}
					value={this.state.firstWord} />
				<h1>{this.state.firstWord}</h1>

				<input
					type="text"
					name="secondWord"
					placeholder="Second Word"
					onChange={this.handleInput}
					value={this.state.secondWord} />
				<h1>{this.state.secondWord}</h1>

				{/* example of text area */}
				{/* its giving me errors so i commented it out */}
				<textarea value={"Share your thoughts"} onChange={this.handleInput} />
				<br />
				<br />

				<label>
					Checkbox Example
					<br />
					<input
						type="checkbox"
						name="isFriendly"
						checked={this.state.isFriendly}
						onChange={this.handleInput} />
						Are you Friendly?
				</label>
				<br />
				<br />
				{/* /////////////////////////////////////////////////////////////////// */}

				<label>
					Radio Example
					<br />
					<input
						type="radio"
						name="gender"
						value="male"
						checked={this.state.gender === "male"}
						onChange={this.handleInput} />
						Male
				</label>
				<br />

				<label>
					<input
						type="radio"
						name="gender"
						value="female"
						checked={this.state.gender === "female"}
						onChange={this.handleInput} />
						Female
				</label>
				<h2>You chose {this.state.gender}</h2>
				{/* ///////////////////////////////////////////////////// */}
				<br/>

				<h3>Choose your color</h3>
				<select 
				value={this.state.color}
				onChange={this.handleInput}
				name="color"
				>
					<option value="blank"></option>
					<option value="blue">Blue</option>
					<option value="purple">Purple</option>
					<option value="green">Green</option>
				</select>
				<h1>Your chosen color is {this.state.color}</h1>
				<button>Submit</button>
			</form>
		)
	}
}

export default Form

//example of how to handle input on a form
//you can captcher keystrokes from the user and output it