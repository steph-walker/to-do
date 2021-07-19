import React from 'react'
import ReactDOM from 'react-dom'
import Joke from './Joke'


ReactDOM.render(
  <React.StrictMode>
    <Joke question="name is" answer="stephanie"/>
    <Joke question="name is" answer="stephanie"/>
    <Joke question="name is" answer="stephanie"/>
    <Joke question="name is" answer="stephanie"/>
    <Joke  answer="stephanie"/>
  </React.StrictMode>,
  document.getElementById('root')
);

