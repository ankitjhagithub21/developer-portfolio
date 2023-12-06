import React from 'react'

const SocialMedia = () => {
    const links = [
        {
            id:1,
            class:'fa-brands fa-github',
            path:"https://bit.ly/3XubLzN"
        },
        {
            id:2,
            class:"fa-brands fa-linkedin",
            path:"https://bit.ly/3G0NCKd"
        },
        {
            id:3,
            class:"fa-brands fa-twitter",
            path:"https://twitter.com/ItsAnkitjha22"
        },
        {
            id:4,
            class:"fa-brands fa-youtube",
            path:"https://www.youtube.com/@codingwithankit7619"
        },
        
    ]
    
   
  return (
    <div className='d-flex gap-3 px-3'>
        {
            links.map((link)=>{
                return <a href={link.path} target='_blank' className='border'>
                    <i className={link.class}></i>
                </a>
            })
        }
    </div>
  )
}

export default SocialMedia