import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social, picture } = about

  // compute image src safely
  let imageSrc = ''
  if (picture) {
    if (picture.startsWith('http')) {
      imageSrc = picture
    } else if (picture.startsWith('/')) {
      imageSrc = `${process.env.PUBLIC_URL}${picture}`
    } else {
      imageSrc = `${process.env.PUBLIC_URL}/images/${picture}`
    }
  }

  return (
    <section className='about' aria-labelledby='about-title'>
      <div className='about__copy'>
        <p className='eyebrow'><span /> Available for game development opportunities</p>
        <h1 id='about-title'>Building games that feel great <em>and scale.</em></h1>
        <p className='about__role'>{name} — {role}</p>
        <p className='about__desc'>{description}</p>
        <div className='about__contact'>
          <a href='#projects' className='btn btn--primary'>Explore my work <ArrowForwardIcon /></a>
        {resume && (
          <a
            href={`${process.env.PUBLIC_URL}${resume}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='btn btn--outline'>View résumé</span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='GitHub profile'
                className='icon-link'
                target='_blank' rel='noreferrer'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='LinkedIn profile'
                className='icon-link'
                target='_blank' rel='noreferrer'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
        </div>
      </div>
      {picture && <div className='about__portrait'><img src={imageSrc} alt={name} /><span>Unity · Multiplayer · XR</span></div>}
    </section>
  )
}

export default About
