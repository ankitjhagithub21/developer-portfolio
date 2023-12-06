import React from 'react'

const Skills = () => {
  const skills = ['html5', 'css3-alt', 'js', 'github', 'python', 'react', 'node', 'sass', 'git','java'];

  return (
    <section id='skills' className='my-5'>
        <h2 className='display-5 fw-bold mb-5'>SKILLS</h2>
      <div className='d-flex gap-4 p-3 rounded' style={{overflowX:"scroll"}} id='skillContainer'>
      {
        skills.map((skill,index)=>{
          return  <div key={index} className='shadow px-4 py-3 rounded fs-1 bg-light text-dark'>
            <i className={`fa-brands fa-${skill}`}></i>
          </div>
        })
      }
    </div>
    </section>
  )
}

export default Skills