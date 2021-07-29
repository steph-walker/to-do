import React from 'react'


class Meme extends React.Component {
	constructor() {
		super()
		this.state = {
			topText: "",
			bottomText: "",
			randomImg: "http://imgflip.com/1bij.jpg"
		}
	}

	componentDidMount() {
		fetch("https://api.imgflip.com/get_memes")
		.then()
	}
	
	render() {
		return(
			<h1>Memes!</h1>
		)
	}

}

export default Meme