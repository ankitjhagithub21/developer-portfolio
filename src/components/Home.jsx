import React, { useState } from 'react'
import Header from './Header'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  const [mode,setMode] = useState('light')
  const toggleMode = () =>{
   
    if(mode=='light'){
      document.body.classList.replace('light','dark')
      setMode('dark')
    }else{
      document.body.classList.replace('dark','light')
      setMode('light')
    }
  }
  return (
    <>
      <i className={`fa-solid fa-${mode=='light'?'moon':'sun'} fs-4 `} id='toggleBtn' onClick={toggleMode}></i>
      <div className="container">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default Home