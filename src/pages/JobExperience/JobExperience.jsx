import { useRef } from 'react'
import useIsVisible from '../../hooks/useIsVisible'
import Job from '../../components/Job/Job'
import './JobExperience.css'

const jobs = [
  {
    id: 1,
    jobName: 'Botera Recreational Dispensary',
    jobTitle: 'Shift Lead',
    from: 'February, 2023',
    to: 'present',
    jobUrl: 'https://boterama.com/locations/taunton/',
  },
  {
    id: 2,
    jobName: 'South Coast Answering Service',
    jobTitle: 'Call Center Agent',
    from: 'January, 2022',
    to: 'January, 2023',
    jobUrl: 'https://www.southcoastansweringservice.com/',
  },
  {
    id: 3,
    jobName: 'Chipotle Mexican Grill',
    jobTitle: 'Service Manager',
    from: 'August, 2021',
    to: 'January, 2022',
    jobUrl: 'https://locations.chipotle.com/ma/hanover/1773-washington-st',
  },
  {
    id: 4,
    jobName: 'Buffalo Wild Wings',
    jobTitle: 'Bartender/Server',
    from: 'January 2021',
    to: 'August 2021',
    jobUrl:
      'https://www.google.com/search?q=buffalo+wild+wings+brockton&sca_esv=569938233&sxsrf=AM9HkKmHTVtBGQSdDrSfP5i52v5hTTgJCw%3A1696220312048&source=hp&ei=mEQaZbNTu9_k2g-K3av4Aw&iflsig=AO6bgOgAAAAAZRpSqMXBkXJLeYEoh2YQL6hOXNDfEvie&ved=0ahUKEwiz_6GJwdaBAxW7L1kFHYruCj8Q4dUDCA0&uact=5&oq=buffalo+wild+wings+brockton&gs_lp=Egdnd3Mtd2l6IhtidWZmYWxvIHdpbGQgd2luZ3MgYnJvY2t0b24yBxAjGIoFGCcyDRAuGK8BGMcBGIoFGEMyBRAAGIAEMgUQABiABDIGEAAYFhgeMgYQABgWGB4yCBAAGBYYHhgPMggQABiKBRiGAzIIEAAYigUYhgMyCBAAGIoFGIYDSIcbUABY0xlwAHgAkAEAmAGKAaAB-hOqAQQyMC43uAEDyAEA-AEBwgIHEAAYigUYQ8ICExAuGIoFGLEDGIMBGMcBGNEDGEPCAg0QLhiKBRjHARivARhDwgILEAAYgAQYsQMYgwHCAgQQIxgnwgIREC4YgAQYsQMYgwEYxwEY0QPCAhAQLhiABBgUGIcCGLEDGIMBwgIWEC4YgAQYFBiHAhixAxiDARjHARjRA8ICDhAAGIAEGLEDGIMBGMkDwgIIEAAYigUYkgPCAgsQLhiABBixAxiDAcICDRAAGIAEGBQYhwIYyQPCAgoQABiKBRixAxhDwgIIEAAYgAQYsQPCAhAQABiABBgUGIcCGLEDGMkDwgILEC4YrwEYxwEYgATCAgsQLhiABBjHARivAcICDRAAGIAEGBQYhwIYsQPCAgoQABiABBgUGIcC&sclient=gws-wiz',
  },
  {
    id: 5,
    jobName: 'Chipotle Mexican Grill',
    jobTitle: 'Grill Cook/Dishwasher',
    from: 'June, 2020',
    to: 'January, 2021',
    jobUrl: 'https://locations.chipotle.com/ma/westwood/217-university-ave',
  },
  {
    id: 6,
    jobName: "Season's Corner Market",
    jobTitle: 'Cashier/Maintenance',
    from: 'January 2020',
    to: 'June, 2020',
    jobUrl:
      'https://www.seasonscornermarket.com/locations/7-main-st-lakeville-ma-02347/',
  },
  {
    id: 7,
    jobName: "Friendly's",
    jobTitle: 'Grill Cook',
    from: 'June, 2018',
    to: 'January, 2019',
    jobUrl:
      'https://locations.friendlysrestaurants.com/ll/US/MA/Middleborough/40-Bedford-Road',
  },
  {
    id: 8,
    jobName: "Papa Gino's",
    jobTitle: 'Cashier/Cook',
    from: 'October 2017',
    to: 'June, 2018',
    jobUrl:
      'https://locations.papaginos.com/ma/taunton/65-f-taunton-depot--drive.html',
  },
  {
    id: 9,
    jobName: 'Camp Welch',
    jobTitle: 'Counselor/Lifeguard',
    from: 'June, 2016',
    to: 'August, 2017',
    jobUrl: 'https://www.fallriverbgc.org/campwelch',
  },
]

const JobExperience = () => {
  const ref = useRef()
  const visibility = useIsVisible(ref)
  return (
    <section id='job-experience-section'>
      <h2>Job Experience</h2>
      <div
        id='job-experience-content'
        ref={ref}
        className={`section-content ${visibility ? 'visible' : ''}`}
      >
        <h4>
          While I have never had a job in the tech industry, I believe my job
          experience is diverse, and has lead me to a deeper understanding of
          business, leadership, and problem solving.
        </h4>
        <ul id='jobs-list'>
          {jobs.map(({ id, jobName, jobTitle, from, to, jobUrl }) => (
            <Job
              key={id}
              jobName={jobName}
              jobTitle={jobTitle}
              from={from}
              to={to}
              jobUrl={jobUrl}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default JobExperience
