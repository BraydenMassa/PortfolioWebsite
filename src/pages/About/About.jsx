import useIsVisible from '../../hooks/useIsVisible'
import './About.css'
import { useRef } from 'react'

const About = () => {
  const ref = useRef()
  const visibility = useIsVisible(ref)
  return (
    <section id='about-section'>
      <h2>About Me</h2>
      <p ref={ref} className={`section-text ${visibility ? 'visible' : ''}`}>
        Hello, world! My name is Brayden Massa, and I am a software engineer
        based out of Taunton, Massachusetts. I am currently a year away from
        finishing my Bachelor's of Computer Science from Southern New Hampshrire
        University, and am looking for a job in software development. I have
        experience with front and backend frameworks and libraries, and would be
        interested in frontend, backend, or fullstack development. I constantly
        find myself looking for a job with an infinite ceiling, where I can
        continue to grow and learn with the company.
      </p>
    </section>
  )
}

export default About
