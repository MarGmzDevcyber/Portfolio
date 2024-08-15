import React from 'react'
import './contact.css'
import { AiOutlineMail } from "react-icons/ai";
import { BiLogoDiscord } from "react-icons/bi";
import { PiWhatsappLogoThin } from "react-icons/pi";
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_zuhbque', 'template_g61484k', form.current,'OA-5ygts9mVNFPf96',) 
      
      e.target.reset()
    };
    return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail  className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>sg.dev6@gmail.com</h5>
            <a href="mailto:sg.dev6@gmail.com">Send a message</a>
          </article>
          <article className="contact_option">
            <BiLogoDiscord  className='contact_option-icon'/>
            <h4>Discord</h4>
            <h5>samgomezdev</h5>
            <a href="https://discord.com/" >Send a message</a>
          </article>
          <article className="contact_option">
            <PiWhatsappLogoThin  className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+52484587106</h5>
            <a href="https://api.whatsapp.com/send?phone+52484587106">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows={7} placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form> 
      </div>
    </section>
  )
} 
export default Contact;
