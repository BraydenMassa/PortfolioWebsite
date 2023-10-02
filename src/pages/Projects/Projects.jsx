import './Projects.css'
import useIsVisible from '../../hooks/useIsVisible'
import { useRef } from 'react'

const Projects = () => {
  const ref = useRef()
  const visibility = useIsVisible(ref)
  return (
    <section id='projects-section'>
      <h2>Projects</h2>
      <p>Projects will go here.</p>
      <div
        ref={ref}
        className={`filler section-content  ${visibility ? 'visible' : ''}`}
      ></div>
    </section>
  )
}

export default Projects
