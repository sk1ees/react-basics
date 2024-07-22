import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import './App.css'
import Spinner from './components/Spinner'
export class App extends Component {
  render() {
    return (
      <>
      {/* navbar-component  */}
        <Navbar />
       
      {/* news-component  */}
        <News />


      </>
    )
  }
}

export default App
