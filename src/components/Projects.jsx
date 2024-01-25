import React from 'react'
import ProjectCompo from './ProjectCompo'

const Projects = () => {
  const projects = [
    {
        id:1,
        name:"Shopping Cart",
        path:"/projects/p1.png",
        demo:"https://shopping-cart-orpin-three.vercel.app/",
        code:"https://github.com/ankitjhagithub21/shopping-cart"

    },
    {
        id:2,
        name:"Recipe Finder",
        path:"/projects/p2.png",
        demo:"https://recipe-finder-app-tau.vercel.app/",
        code:"https://github.com/ankitjhagithub21/recipe-finder-app"

    },
    {
        id:3,
        name:"TMDB Clone",
        path:"/projects/p3.png",
        demo:"https://tmdb-clone-mauve.vercel.app/",
        code:"https://github.com/ankitjhagithub21/tmdb-clone"

    },
    {
        id:4,
        name:"Car Dealer",
        path:"/projects/p4.png",
        demo:"https://car-dealer-wine-theta.vercel.app/",
        code:"https://github.com/ankitjhagithub21/car-dealer",

    },
    {
        id:5,
        name:"Flexa",
        path:"/projects/p5.png",
        demo:"https://flexa-nu.vercel.app/",
        code:"https://github.com/ankitjhagithub21/flexa",
    },
    {
        id:6,
        name:"Ecommerce Website",
        path:"/projects/p6.png",
        demo:"https://cara-ecom-23.netlify.app/",
        code:"https://github.com/ankitjhagithub21/Ecommerce-internpeTask2"
    },
 
    

]


  return (
    <section id='projects' className='my-5'>
      <h2 className='display-5 fw-bold  mb-5 text-center' data-aos="fade-up">Projects</h2>
      <div className='row'>
      {
        projects.map((project)=>{
          return <ProjectCompo key={project.id} project={project}/>
        })
      }
      </div>
    </section>
  )
}

export default Projects