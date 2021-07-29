import React from 'react'

function V2 (props) {
	return (
		<main>
			<form>
				<h1>
					Second Form version where I separated everything
				</h1>
				<input name="firstName" value="props.data.firstName" onChange={props.handleChange} placeholder="First Name" /><br />
				<input name="lastName" value="props.data.lastName" onChange={props.handleChange} placeholder="Last Name" /><br />
				<input name="age" value="props.data.age" onChange={props.handleChange} placeholder="Age" /><br />

				{/* Create radio buttons for gender here */}
				<br />
				<label>
					<input type="radio" name="gender" value="male" checked={props.data.gender === "male"} onChange={props.handleChange} />Male
				</label>

				<br />

				<label>
					<input type="radio" name="gender" value="female" checked={props.data.gender === "female"} onChange={props.handleChange} /> Female
				</label>

				{/* Create select box for location here */}
				<br />
				<select value={props.data.destination} name="destination" onChange={props.handleChange}>

					<option value="">Choose A Destination</option>
					<option value="france">France</option>
					<option value="mexico">Mexico</option>
					<option value="spain">Spain</option>
					<option value="iceland">Iceland</option>

				</select>

				{/* Create check boxes for dietary restrictions here */}
				<br />

				<label>

					<input type="checkbox" name="isVegan" onChange={props.handleChange} checked={props.data.diet.isVegan} /> Vegan?
					<input type="checkbox" name="isKosher" onChange={props.handleChange} checked={props.data.diet.isKosher} /> Kosher?
					<input type="checkbox" name="isLactose" onChange={props.handleChange} checked={props.data.diet.isLactose} /> Lactose?


				</label>
				<br />
				<br />

				<button>Submit</button>
			</form>
			<hr />
			<h2>Entered information:</h2>
			<p>Your name: {props.data.firstName} {props.data.lastName}</p>
			<p>Your age: {props.data.age}</p>
			<p>Your gender: {props.data.gender}</p>
			<p>Your destination: {props.data.destination}</p>
			<p>
				Your dietary restrictions:
				{/* Dietary restrictions here, comma separated */}
				<br />
				Vegan: {props.data.isVegan ? "yes" : "no"}
				<br />
				Koser: {props.data.isKosher ? "yes" : "no"}
				<br />
				Lactose: {props.data.isLactose ? "yes" : "no"}
			</p>
		</main>
	)
}

export default V2