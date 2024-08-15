import React from 'react'
import "./about.css"
import Photo from '../../assets/photo2.jpeg';
import { SlPuzzle, SlChemistry, SlEyeglass } from "react-icons/sl";

const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about_container">
            <div className="about_me">
                <div className="about_me-image">
                    <img src={Photo}  alt=''/></div>
            </div>

            <div className="about_content">
              <div className="about_cards">
                    <article className='about_card'>
                      <SlPuzzle  className='about_icon'/>
                      <h5> Experiences</h5>
                      <small> 2 Years Working</small>
                    </article>
                    <article className='about_card'>
                      <SlChemistry  className='about_icon'/>
                      <h5> Projects</h5>
                      <small>+10 in Process</small>
                    </article>
                    <article className='about_card'>
                      <SlEyeglass  className='about_icon'/>
                      <h5> Currently Learning</h5>
                      <small> New Skills in Process </small>
                    </article>
              </div>
              <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquid laborum velit hic, voluptatibus qui quia officiis optio? Laboriosam fugit natus nihil iste necessitatibus voluptates nulla dolorem
                  alias sed, optio deserunt.
              </p>

              <a href="#contact" className='btn btn-primary'> Let's Talk </a>
            </div>
        </div>
    </section>
  )
}

export default About;