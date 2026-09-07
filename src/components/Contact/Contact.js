import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <p className='eyebrow'>Let’s work together</p>
      <h2>Have a game in mind?</h2>
      <p>I’m open to full-time roles and ambitious game projects—especially multiplayer, gameplay systems, and XR.</p>
      <a href={`mailto:${contact.email}`} className='btn btn--primary'>Start a conversation</a>
      <a href={`mailto:${contact.email}`} className='contact__email'>{contact.email}</a>
    </section>
  )
}

export default Contact
