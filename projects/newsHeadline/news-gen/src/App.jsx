import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import './App.css'
// import Spinner from './components/Spinner'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
export class App extends Component {

  apiKey = import.meta.env.VITE_API_URL
  state = {
    progress: 10,
    
  }
  setProgress = (progress) =>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <>
      <Router>
      {/* navbar-component  */}
        <Navbar />
        <LoadingBar
        color='#00F3FF'
        height={4}
        progress={this.state.progress}
        
      />
      {/* news-component  */}
        <Routes>
        <Route exact path="/" element={<News setProgress = {this.setProgress}  apiKey = {this.apiKey} key= "general"  category = "general"/>} />
        <Route exact path="/sports" element={<News setProgress = {this.setProgress}  apiKey = {this.apiKey} key= "sports"  category = "sports"/>} />
        <Route exact path="/entertainment" element={<News setProgress = {this.setProgress}  apiKey = {this.apiKey} key= "entertainment"  category = "entertainment"/>} />
        <Route exact path="/business" element={<News setProgress = {this.setProgress}  apiKey = {this.apiKey} key= "business"  category = "business"/>} />
        <Route exact path="/technology" element={<News setProgress = {this.setProgress}  apiKey = {this.apiKey} key= "technology"  category = "technology"/>} />
       </Routes>
      </Router>


      </>
    )
  }
}

export default App
