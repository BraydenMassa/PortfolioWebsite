import './Job.css'

const Job = ({ jobName, jobTitle, from, to, jobUrl }) => {
  return (
    <li className='job'>
      <h5>
        <a className='job-link' href={jobUrl} target='_blank' rel='noreferrer'>
          {jobName}
        </a>
      </h5>
      <p>Role: {jobTitle}</p>
      <p>
        From {from} to {to}
      </p>
    </li>
  )
}

export default Job
