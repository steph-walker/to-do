import React from 'react'

function Cond(props) {
	//this is the old example

	/*if(props.isLoading === true) {
		<h1>Loading ...</h1>
	}
		return(
			<h1>Main Page</h1>
		)
		*/

	//new example of how to do this with turneray

	return (
		<div>
			{props.isLoading ? <h1>Loading ...</h1> :  <h1>Main Page</h1>}
		</div>
	)
		
	
}

export default Cond


//Turnery Operator

// codition ? statement if true : if false
// are there letters on the screen ? if its true - display an image : if its false - reply with no