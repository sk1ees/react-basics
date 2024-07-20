import './App.css'
import Alert from './components/Alert'
import About from './components/About'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => { setAlert(null) }, 2000)
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#212529"
      showAlert(" ✅ DarkMode has been enabled", "success")
      document.title = "!! Dark Mode Enabled !!"
      setInterval(() => {
        document.title = "TextUtils - Home"
      }, 1000)
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white"
      showAlert(" ❌ LightMode has been enabled", "warning")
      document.title = "!! Light Mode Enabled !!"
      setInterval(() => {
        document.title = "TextUtils - Home"
      }, 1500)
    }
  }


  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze below:-" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
        {/* <TextForm showAlert={showAlert} heading="Enter the text to utilize" mode={mode} toggleMode={toggleMode} /> */}
        {/* <About /> */}
      </Router>
    </>
  )
}

export default App
