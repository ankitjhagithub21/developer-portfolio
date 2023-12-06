import React from 'react'
import Typewriter from 'typewriter-effect';
import SocialMedia from './SocialMedia';

const Header = () => {
  const name = "ANKIT JHA";
  const roles = ['Full Stack Developer.', 'Youtuber.', 'Student.'];

  return (
    <div className='my-5' id='header'>
      
      <h1 className='display-4 fw-bold'>👋 HEY, I AM {name}</h1>
      <div className='d-flex gap-1 fs-3 font-bold p-3'>
        <p>I am a</p>
        <Typewriter
          options={{
            strings: roles,
            autoStart: true,
            loop: true,


          }}
        />
        
      </div>
      <SocialMedia/>
    </div>
  )
}

export default Header