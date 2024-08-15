import React from 'react'
import './education.css'
import { SlCheck } from "react-icons/sl";


const Education = () => {
  return (
    <section id='education'>
          <h2>Education</h2>
      <div className='container edu_container'>
          <div className="eduu">
            <h3>Desarrollo Web Front End</h3>
            <div className="edu_content">
            <article className='edu_details'>
              <SlCheck  className='edu_details-icon'/>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='edu_details'>
              <SlCheck  className='edu_details-icon'/> 
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='edu_details'>
              <SlCheck  className='edu_details-icon'/>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='edu_details'>
              <SlCheck className='edu_details-icon'/>
              <h4>React Js.</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='edu_details'>
              <SlCheck  className='edu_details-icon'/>
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='edu_details'>
              <SlCheck  className='edu_details-icon'/>
              <h4>Responsive</h4>
              <small className='text-light'>Experienced</small>
            </article>
            </div>
          </div>
          {/* -----------------------------Second Card------------------------
          <div className="eduu">
            <h3>Diseño Gráfico</h3>
            <div className="edu_content">
            <article className='edu_details'>
              <SlCheck  className='edu_details-icon'/>
              <h4>Corel Draw</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='edu_details'>
              <SlCheck  className='edu_details-icon'/> 
              <h4>Photoshop</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='edu_details'>
              <SlCheck  className='edu_details-icon'/>
              <h4>Illustrator</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            {/* <article className='edu_details'>
              <SlCheck  className='edu_details-icon'/>
              <h4>Figma</h4>
              <small className='text-light'>Intermediate</small>
            </article> 
            <article className='edu_details'>
              <SlCheck  className='edu_details-icon'/>
              <h4>Behance</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            </div>
          </div> */}
      </div>
    </section>
  )
}

export default Education;