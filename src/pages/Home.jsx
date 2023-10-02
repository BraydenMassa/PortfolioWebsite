import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import About from './About/About'
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
    </div>
  )
}

export default Home
