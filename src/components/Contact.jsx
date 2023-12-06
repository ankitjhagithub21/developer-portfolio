import React from 'react'

const Contact = () => {
  return (
    <section className='row my-5 py-5' id='contact' >
       <h2 className='fs-4 mb-3 text-center'>Send me a message</h2>
       <div className="col-md-8 mx-auto">
        <form action="https://formspree.io/f/xgejgvok"
  method="POST">
         <input type="text" className='form-control mb-3' placeholder='Enter Your Name' name='name' required/>
         <input type="email" className='form-control mb-3' placeholder='Enter Your Email' name='email' required/>
         <textarea name="message"  rows="6" className='form-control mb-3' placeholder='Enter Your Message' required></textarea>
         <div className='text-center'>
         <input type="submit" className='btn btn-primary ' />
         </div>
        </form>
       </div>
    </section>
  )
}

export default Contact