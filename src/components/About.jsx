import React from 'react'

const About = () => {
  return (
    <section className='row my-5 flex-wrap-reverse' id='about'>
      <div className="col-md-8 d-flex flex-column justify-content-center" data-aos="fade-right">
        <h2 className='display-5 fw-bold'>ABOUT ME</h2>
        <p className='fs-4'>Hi, I'm Ankit Jha, a passionate and detail-oriented full-stack developer with a strong foundation in front-end and back-end technologies. I enjoy creating interactive and user-friendly web applications.</p>
        <div className='buttons'>
          <button className='btn btn-primary'>Education</button>
          <button className='btn btn-outline-primary'>Resume</button>
        </div>
      </div>
      <div className="col-md-4 p-4" data-aos="fade-left">
        <img src="./profile.jpg" alt="profile" className='img-fluid rounded-circle '/>
      </div>
    </section>
  )
}

export default About