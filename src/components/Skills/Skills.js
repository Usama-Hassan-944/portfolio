import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <p className='eyebrow'>Technical toolkit</p>
      <div className='section-heading'><h2>What I build with</h2><p>A production-focused toolkit spanning gameplay, networking, XR, backend services, and live operations.</p></div>
      <div className='skills__grid'>
        {skills.map((group, index) => <article className='skill-card' key={group.title}>
          <span className='skill-card__index'>{String(index + 1).padStart(2, '0')}</span>
          <h3>{group.title}</h3><p>{group.description}</p>
          <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>)}
      </div>
    </section>
  )
}

export default Skills
