import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {AiFillSkype} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2lig6ml', 'template_gg3vj9f', form.current, 'mWZAhzAL0pNBTxj-j')

    e.target.reset();
  };

  /*
    EmailJs:
    Email: giang998.0@gmail
    PW: 0908751972 

    Deployment: Netlify
    Email: giang998.0@gmail
    PW: Phuc0908751972 
  */

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Giang998.0@gmail.com</h5>
            <a href="mailto:Giang998.0@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Phuc Che</h5>
            <a href="https://m.me/phuc.che.1997" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <AiFillSkype className='contact__option-icon'/>
            <h4>Skype</h4>
            <h5>Phúc Chế</h5>
            <a href="skype:live:giang998.0?chat" target="_blank">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
