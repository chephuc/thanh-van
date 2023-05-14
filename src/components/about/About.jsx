import React from 'react'
import './about.css'
import ME from '../../assets/me-about1.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experrience</h5>
              <small>4+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Cliens</h5>
              <small>10+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed projects</small>
            </article>
          </div>

          <p>
          I am a full-stack programmer with 4 years of experience. I am proficient in a wide range of front-end and back-end technologies, including HTML, CSS, JavaScript, React, Node.js, Java, and SQL. I have worked on various projects and have a proven track record of delivering high-quality solutions on time. 
          <br/><br/>
          What sets me apart is my passion for learning and staying up-to-date with the latest technologies and programming trends. I am also a collaborative team member with good communication skills, which helps me to work effectively with clients and stakeholders.
          <br/><br/>
          Overall, thank you for taking the time to get to know me.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about
