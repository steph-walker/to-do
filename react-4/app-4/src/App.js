import React from 'react'

import Form1 from './components/Form-1'
import Form2 from './components/Form-2'
import Form3 from './components/Form-3'

import FormV2 from './form-redo/FormV2'

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
        <div>
          <p>------------------------------------------</p>
          <h2>Example of the First type of form</h2>
        <Form1 />
        <p>------------------------------------------</p>
          <h2>Example of the Second type of form</h2>
        <Form2 />
        <p>------------------------------------------</p>
          <h2>Example of the Third type of form</h2>
        <Form3 />
        </div>

        <div>
          <FormV2 />
        </div>
      </div>
    )
  }
}

export default App


//the way we save data is by using state
//so we have to save it into state