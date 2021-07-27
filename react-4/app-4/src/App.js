import React from 'react'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      character: {},
      isLoading: true
    }
  }

  componentDidMount() {
    this.setState({isLoading: true})

    fetch("https://swapi.dev/api/people/1/")
      .then(response => response.json())
      .then(data => {
        this.setState({
          character: data,
          isLoading: false
          //set loading to false once data show up on screen
          //that what the above is doing when we're setting it to false again
        })
      })
  }

  render() {
    const text = this.state.isLoading ? "loading.." : this.state.character.name
    return(
      <div>
        {text}
      </div>
    )
  }
}

export default App


//the way we save data is by using state
//so we have to save it into state