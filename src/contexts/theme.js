import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(() => {
    const savedTheme = localStorage.getItem('themeName')
    if (savedTheme) return savedTheme
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = themeName
    document.documentElement.style.colorScheme = themeName
  }, [themeName])

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const syncTheme = (event) => {
      if (!localStorage.getItem('themeName')) {
        setThemeName(event.matches ? 'dark' : 'light')
      }
    }
    darkMediaQuery.addEventListener('change', syncTheme)
    return () => darkMediaQuery.removeEventListener('change', syncTheme)
  }, [])

  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark'
    localStorage.setItem('themeName', name)
    setThemeName(name)
  }

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }
