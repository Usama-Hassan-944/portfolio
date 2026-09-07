import { experience } from '../../portfolio'
import './Experience.css'

const Experience = () => {
  if (!experience.length) return null

  return (
    <section className='section experience' id='experience'>
      <p className='eyebrow'>Professional experience</p>
      <div className='section-heading'>
        <h2>Where I’ve built</h2>
        <p>Production experience across mixed reality, multiplayer, live-service games, gameplay systems, and AI.</p>
      </div>

      <ol className='experience__timeline'>
        {experience.map((item, index) => (
          <li className='experience__item' key={item.company}>
            <div className='experience__marker' aria-hidden='true'>
              {String(index + 1).padStart(2, '0')}
            </div>
            <div className='experience__meta'>
              <p>{item.location}</p>
            </div>
            <div className='experience__content'>
              <h3>{item.company}</h3>
              <p className='experience__role'>{item.role}</p>
              <ul>
                {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Experience
