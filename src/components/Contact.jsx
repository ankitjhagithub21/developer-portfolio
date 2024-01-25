import React from 'react'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <section className='row my-5 py-5' id='contact' data-aos="fade-up">
      <h2 className='fs-1 mb-3 fw-bold text-center'>Contact Me</h2>
      <div className="col-md-6 mx-auto">
        <form onSubmit={handleSubmit}>
          <input type="text" className='form-control mb-3' placeholder='Enter Your Name' name='name' required />
          <input type="email" className='form-control mb-3' placeholder='Enter Your Email' name='email' required />
          <textarea name="message" rows="6" className='form-control mb-3' placeholder='Enter Your Message' required></textarea>
          <div className='text-center w-100'>
           <button className='btn btn-success rounded-5'>Submit</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact