import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import "./App.css"
const App = () => {
  const [mode, setMode] = useState('light');
  return (


    <>
      <Home />
    </>

  )
}

export default App