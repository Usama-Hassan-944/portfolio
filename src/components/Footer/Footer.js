import './Footer.css'

const Footer = () => (
  <footer className='footer'>
    <a
      href='https://github.com/usama-hassan-944/portfolio'
      className='link footer__link'
    >
      © {new Date().getFullYear()} Usama Hassan — Game Developer
    </a>
  </footer>
)

export default Footer
