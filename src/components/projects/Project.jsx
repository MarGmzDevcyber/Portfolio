import React from 'react'
import './project.css'
// import IMG1 from '../../assets/img1.jpg'
// import IMG2 from '../../assets/img2.jpg'
// import IMG3 from '../../assets/img3.jpg'
// import IMG4 from '../../assets/img4.jpg'
// import IMG5 from '../../assets/img5.jpg'
// import IMG6 from '../../assets/img6.jpg'


const data =[
    {
        id:1,
        // image:IMG1,
        title:'Proyecto aaaaabbbaaa',
        github:'httpps;//github.com',
        demo: 'demo.com....'   
    },
    {
        id:1,
        // image:IMG2,
        title:'Proyecto aaaavvvaaaa',
        github:'httpps;//github.com',
        demo: 'demo.com....'   
    },
    {
        id:1,
        // image:IMG3,
        title:'Proyecto aaaavbvbaaaa',
        github:'httpps;//github.com',
        demo: 'demo.com....'   
    },
    {
        id:1,
        // image:IMG4,
        title:'Proyecto aaggaaaaaa',
        github:'httpps;//github.com',
        demo: 'demo.com....'   
    },
    {
        id:1,
        // image:IMG5,
        title:'Proyecto aaaaaaaa',
        github:'httpps;//github.com',
        demo: 'demo.com....'   
    },
    {
        id:1,
        // image:IMG6,
        title:'Proyecto llaaaaaa',
        github:'httpps;//github.com',
        demo: 'demo.com....'   
    },
]

const Projects = () => {
    return (
        <section id='projects'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container project_container'>
            {
                data.map(({id, image, title, github, demo}) =>{
                return(
                    <article  key={id} className="project_item">
                        <div className="project_item-image">
                            <img src={image} alt={title} />
                        </div>
                        <h3>{title}</h3>
                        <div className='project_item-cta'>
                            <a href={github} className='btn' target='blank'>GitHub</a>
                            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                        </div>
                    </article>
                )
                })
            }
            </div>
        </section>
    )
}

export default Projects