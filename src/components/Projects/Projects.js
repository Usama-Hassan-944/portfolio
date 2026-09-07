import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <p className='eyebrow'>Selected work</p>
      <div className='section-heading'><h2>Games & experiences</h2><p>Shipped and production work across mixed reality, multiplayer, mobile, PC, and WebGL.</p></div>
        <div className='projects__row'>
          {projects.map((project, index) => (
            <ProjectContainer key={project.name} project={project} index={index} />
          ))}
        </div>
    </section>
  )
}

export default Projects
