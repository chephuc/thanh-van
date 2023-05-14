import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>
        <img src="https://media.istockphoto.com/vectors/fist-with-blue-lightning-illustration-vector-id1209306577?k=20&m=1209306577&s=170667a&w=0&h=6Exb3zEJoJjiT_EyjHx4IPoL9ijmQVI_PugnD71xLVQ=" alt="" />
      </a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.facebook.com/phuc.che.1997" target="_blank"><FaFacebookF/></a>
        <a href="https://www.instagram.com/phuc.che.97" target="_blank"><FiInstagram/></a>
        <a href="http://twitter.com" target="_blank"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Phuc Che. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
