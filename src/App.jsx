import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import "./App.css"


const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (

    <>
      <Home />
    </>

  )
}

export default App