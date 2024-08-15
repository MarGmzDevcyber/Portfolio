import React from 'react'
import './nav.css'
import {GoProjectRoadmap } from "react-icons/go";
import {SlGraduation, SlHome, SlBriefcase, SlBubble, SlUserFemale } from "react-icons/sl";
import {useState} from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
      <nav>
        <a href="#" onClick={ ( ) => setActiveNav('#')} className={ activeNav === '#' ? 'active' : ' ' }> <SlHome /> </a>
        <a href="#about" onClick={ ( ) => setActiveNav('#about')} className={ activeNav === '#about' ? 'active' : ' ' }> <SlUserFemale/> </a>
        <a href="#education" onClick={ ( ) => setActiveNav('#education')} className={ activeNav === '#education' ? 'active' : ' ' }> <SlGraduation/> </a>
        <a href="#services"  onClick={ ( ) => setActiveNav('#services')} className={ activeNav === '#services' ? 'active' : ' ' }> <SlBriefcase/></a>
        <a href="#projects"  onClick={ ( ) => setActiveNav('#projects')} className={ activeNav === '#projects' ? 'active' : ' ' }> <GoProjectRoadmap/></a>
        <a href="#contact"  onClick={ ( ) => setActiveNav('#contact')} className={ activeNav === '#contact' ? 'active' : ' ' }> <SlBubble/> </a>
      </nav>
  )
}

export default Nav;