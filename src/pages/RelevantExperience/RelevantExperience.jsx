import './RelevantExperience.css'
import JavaImg from '../../assets/Java.png'
import HTMLImg from '../../assets/Html.png'
import CSSImg from '../../assets/Css.png'
import JavascriptImg from '../../assets/Javascript.png'
import ReactImg from '../../assets/React.png'
import NodeImg from '../../assets/Nodejs.png'
import NextJSImg from '../../assets/Nextjs.png'
import MySQLImg from '../../assets/Mysql.png'
import MongoDBImg from '../../assets/Mongodb.png'
import { useRef } from 'react'
import useIsVisible from '../../hooks/useIsVisible'

const RelevantExperience = () => {
  const ref = useRef()
  const visibility = useIsVisible(ref)
  return (
    <section id='relevant-experience-section'>
      <h2>Relevant Experience</h2>
      <div id='relevant-images'>
        <img src={JavaImg} alt='java' />
        <img src={HTMLImg} alt='html' />
        <img src={CSSImg} alt='css' />
        <img src={JavascriptImg} alt='javascript' />
        <img src={ReactImg} alt='react' />
        <img src={NodeImg} alt='node' />
        <img src={NextJSImg} alt='nextjs' />
        <img src={MySQLImg} alt='mysql' />
        <img src={MongoDBImg} alt='mongodb' />
      </div>
      <p ref={ref} className={`section-content ${visibility ? 'visible' : ''}`}>
        My coding experience began with Java, where I learned a lot of common
        programming concepts such as OOP, polymorphism, abstraction, data
        structures, and algorithms. I then started getting into web development,
        where I learned HTML, CSS, and Javascript. After exploring these
        technologies and building a core fundamental understanding of how they
        work, I began learning about React and Node, where I was able to start
        building larger scale applications with more readable code. This is when
        I started learning about Next.js, and the powerful differences between a
        library like react, and a framework like Next.js. Once I started
        building full stack applications, I got much more comfortable with
        database engineering. I learned the difference between relational and
        non-relational databases, and learned how to use technologies like MySQL
        for relational ones, and MongoDB for simpler databases.
      </p>
    </section>
  )
}

export default RelevantExperience
