import React from 'react'


const ProjectCompo = ({ project }) => {

    return (
        <div className='col-md-6 my-3' data-aos="fade-up">

           <div className='border d-flex flex-wrap align-items-center justify-content-center rounded p-3'>
           <div className="project-container">
                <img src={project.path} alt="project" className='img-fluid' />
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center">
                <h3 className='fs-5'>{project.name}</h3>
                <div className='d-flex gap-3 justify-content-center align-items-center w-full'>
                    <a href={project.demo} target='_blank'>
                        <i className='fas fa-eye fs-5'></i>
                    </a>
                    <a href={project.demo} target='_blank'>
                        <i className='fa-brands fa-github fs-5'></i>
                    </a>
                </div>
                
            </div>
           </div>
        </div>

    )
}

export default ProjectCompo