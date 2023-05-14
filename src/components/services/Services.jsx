import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
          <h3>Web development</h3>
          </div>
          
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Front-end development: A full-stack developer can create user-friendly, interactive, and responsive front-end designs using languages like HTML, CSS, JavaScript, ...</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Back-end development: A full-stack developer can build robust and scalable back-end systems using technologies like Java and Node.js.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Database management: A full-stack developer can manage databases and perform tasks like database design, optimization, and maintenance.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>API development: A full-stack developer can create RESTful APIs and integrate them with front-end and back-end systems.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Deployment and testing: A full-stack developer can ensure the smooth deployment of web applications and conduct testing to ensure they work as expected.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Continuous improvement: A full-stack developer can continuously improve the web application by fixing bugs, adding new features, and optimizing performance.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
