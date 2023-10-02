import './NavBar.css'
import { Link } from 'react-scroll'

const NavBar = () => {
  return (
    <div id='nav-container'>
      <nav>
        <ul className='navbar'>
          <li className='nav-item'>
            <Link
              to='about-section'
              spy={true}
              smooth={true}
              offset={-180}
              duration={500}
            >
              About Me
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='relevant-experience-section'
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Relevant Experience
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='projects-section'
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='job-experience-section'
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            ></Link>
            Job Experience
          </li>
          <li className='nav-item'>
            <Link
              to='contact-section'
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className='nav-padding'></div>
      </nav>
    </div>
  )
}

export default NavBar
