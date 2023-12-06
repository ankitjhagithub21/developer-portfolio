import React from 'react'


const ProjectCompo = ({ project }) => {

    return (
        <div className='col-md-6 d-flex flex-wrap project' data-aos="fade-up">

            <div className="project-container">
                <img src={project.path} alt="project" className='img-fluid' />
            </div>

            <div className="project-content">
                <h3 className='fs-4'>{project.name}</h3>
                <div className='d-flex gap-3 justify-content-center'>
                    <a href={project.demo} target='_blank'>Live Demo</a>
                    <a href={project.demo} target='_blank'>Source Code</a>
                </div>
                
            </div>
        </div>

    )
}

export default ProjectCompo