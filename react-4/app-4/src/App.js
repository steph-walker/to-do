import React, {Component} from 'react'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      charracter: {}

    }
  }

  componentDidMount() {
    fetch("https://swapi.dev/api/people/1/")
      .then(response => response.json())
      .then(data => {
        this.setState({
          charracter: data
        })
      })
  }

  render() {

    return(
      <div>
        {this.state.charracter.name}
      </div>
    )
  }
}

export default App


//the way we save data is by using state
//so we have to save it into state