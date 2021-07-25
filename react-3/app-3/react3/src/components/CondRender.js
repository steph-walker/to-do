import React from 'react'
import Cond from './Cond'

class Cycle extends React.Component {
	constructor() {
		super()
		this.state = {
			isLoading: true
		}
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				isLoading: false
			})
		}, 1500)
	}

	render() {

		return (
			<div>
				<Cond/>
			</div>
		)
	}
}

export default Cycle

//Conditional Rendering is a sort of pop up
//that appears when a page is loading. It is for the user to see
//that the page is in fact loading and not stuck or frozen


/*
Life Cycle Methods

1) render() -- the render method and what is found inside is what shows up in the dom

2) componentDidMount() -- used a lot for api calls





*/
