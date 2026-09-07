import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import './ProjectContainer.css'

const ProjectContainer = ({ project, index }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const videoRef = useRef(null)
  const closeButtonRef = useRef(null)

  const imageSrc = useMemo(() => {
    if (!project.image) return null

    // Absolute or root-relative URL (e.g. '/project-images/Nexus_Arcade.png')
    if (project.image.startsWith('http') || project.image.startsWith('/')) {
      // Important for GitHub Pages: the app is hosted under a subpath (e.g. /portfolio),
      // so we must prefix root-relative assets with PUBLIC_URL.
      return project.image.startsWith('/')
        ? `${process.env.PUBLIC_URL}${project.image}`
        : project.image
    }

    // Fallback to images folder
    return `${process.env.PUBLIC_URL}/images/${project.image}`
  }, [project.image])

  const videoSrc = useMemo(() => {
    if (!project.video) return null
    return project.video.startsWith('http')
      ? project.video
      : `${process.env.PUBLIC_URL}/videos/${project.video}`
  }, [project.video])

  const closeVideo = useCallback(async () => {
    const video = videoRef.current
    video?.pause()
    try {
      if (document.pictureInPictureElement && document.exitPictureInPicture) await document.exitPictureInPicture()
      if (document.fullscreenElement && document.exitFullscreen) await document.exitFullscreen()
    } catch (error) {
      // The browser may already be leaving a native playback mode.
    }
    setIsVideoOpen(false)
  }, [])

  useEffect(() => {
    if (!isVideoOpen) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeVideo()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [closeVideo, isVideoOpen])

  return (
    <article className='project'>
      {imageSrc && (
        <img
          src={imageSrc}
          alt={`${project.name} screenshot`}
          className='project__image'
        />
      )}

      <div className='project__heading'><span>{String(index + 1).padStart(2, '0')}</span><h3>{project.name}</h3></div>

      <p className='project__description'>{project.description}</p>

      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li key={item} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}

      <div className='project__links'>
        {project.sourceCode && (
          <a
            href={project.sourceCode}
            aria-label='source code'
            className='link link--icon'
            target='_blank'
            rel='noreferrer'
          >
            <GitHubIcon />
          </a>
        )}

        {project.livePreview && (
          <a
            href={project.livePreview}
            aria-label={`View ${project.name} live`}
            className='project__action'
            target='_blank'
            rel='noreferrer'
          >
            <LaunchIcon /> <span>View project</span>
          </a>
        )}

        {videoSrc && (
          <button
            type='button'
            onClick={() => setIsVideoOpen(true)}
            aria-label={`Watch ${project.name} video demo`}
            className='project__action project__video-btn'
          >
            <OndemandVideoIcon /> <span>Watch demo</span>
          </button>
        )}
      </div>

      {isVideoOpen && videoSrc && createPortal(
        <div
          className='project__video-overlay'
          role='dialog'
          aria-modal='true'
          aria-label={`${project.name} video demo`}
        >
          <button type='button' className='project__video-backdrop' aria-label='Close video' onClick={closeVideo} />
          <div className='project__video-modal' role='document'>
            <div className='project__video-title'><strong>{project.name}</strong><button ref={closeButtonRef} type='button' onClick={closeVideo} aria-label='Close video'>×</button></div>
            <video
              ref={videoRef}
              className='project__video'
              controls
              autoPlay
            >
              <source src={videoSrc} />
              {/* Required for eslint jsx-a11y/media-has-caption */}
              <track
                kind='captions'
                src={`${process.env.PUBLIC_URL}/captions/empty.vtt`}
                srcLang='en'
                label='captions'
                default
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>, document.body
      )}
    </article>
  )
}

export default ProjectContainer
