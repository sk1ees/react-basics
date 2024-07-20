import './App.css'
import Alert from './components/Alert'
// import About from './components/About'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React, { useState } from 'react'

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
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white"
      showAlert(" ❌ LightMode has been enabled", "warning")
    }
  }

  const [theme, setTheme] = useState("mode");

  const themeMode = () => {
    setTheme("warning");
  }
  return (
    <>

      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} themeMode={themeMode} />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading="Enter the text to utilize" mode={mode} toggleMode={toggleMode} />
      {/* <About /> */}
    </>
  )
}

export default App
