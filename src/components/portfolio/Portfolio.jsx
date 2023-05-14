import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/mgt.png'
import IMG2 from '../../assets/tns.png'
import IMG3 from '../../assets/wms.png'
import IMG4 from '../../assets/phuc-music.png'
import IMG5 from '../../assets/phuc-movie.png'
import IMG6 from '../../assets/coming-soon.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'MGT - Management terminal system',
    subTitle: 'Flex - Java - Oracle'
  },
  {
    id: 2,
    image:IMG2,
    title: 'TNS - Appointments system',
    subTitle: 'Javascript - Java - Oracle'
  },
  {
    id: 3,
    image: IMG3,
    title: 'WMS - Warehouse management system',
    subTitle: 'ReactJs - Java - SQL'
  },
]

const data2 = [
  {
    id: 4,
    image: IMG4,
    title: 'Music player website',
    subTitle: 'HTML - CSS - Javascript',
    demo: "https://phuc-music.netlify.app/"
  },
  {
    id: 5,
    image: IMG5,
    title: 'Movie website',
    subTitle: 'ReactJs',
    demo: "https://phuc-movie.netlify.app/"
  },
  {
    id: 6,
    image:IMG6,
    title: 'Coming soon'
  },
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      
      <br/>
      <h2>Company Projects</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, subTitle}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} height={300} width={420}/>
                </div>
                <h3>{title}</h3>
                <small className='text-light'>{subTitle}</small>
            </article>
            )
          })
        }
      </div>

      <br/>
      <h2>Personal Projects</h2>
      <div className="container portfolio__container">
        {
          data2.map(({id, image, title, subTitle, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} height={300}/>
                </div>
                <h3>{title}</h3>
                <small className='text-light'>{subTitle}</small>
                <div className="portfolio__item-cta">
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

export default portfolio
