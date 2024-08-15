import React from 'react'
import './footer.css'
import { IoLogoDiscord } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return(
    <footer> 
      <a href="#" className='footer_logo'> SG</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://discord.com"><IoLogoDiscord/></a>
        <a href="https://instagram.com"><IoLogoInstagram/></a>
        <a href="https://x.com"><FaXTwitter/></a>
      </div>


      <div className="footer_copyright">
        <small>&copy; SG. All Rights Reserved. 2024</small>
      </div>
    </footer>
  )

}

export default Footer