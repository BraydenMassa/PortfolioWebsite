import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import About from './About/About'
import Contact from './Contact/Contact'
import JobExperience from './JobExperience/JobExperience'
import Projects from './Projects/Projects'
import RelevantExperience from './RelevantExperience/RelevantExperience'

const Home = () => {
  return (
    <div id='main-container'>
      <Header />
      <NavBar />
      <About />
      <RelevantExperience />
      <Projects />
      <JobExperience />
      <Contact />
    </div>
  )
}

export default Home
