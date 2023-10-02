import { useRef, useState } from 'react'
import './ContactForm.css'
import emailjs from '@emailjs/browser'
import useIsVisible from '../../hooks/useIsVisible'

const ContactForm = () => {
  const [nameText, setNameText] = useState('')
  const [emailText, setEmailText] = useState('')
  const [messageText, setMessageText] = useState('')

  const form = useRef()
  const visibility = useIsVisible(form)
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_5hymzcj',
        'template_cuq7l4o',
        form.current,
        'ZZKOAMXHpbQm52Dyd'
      )
      .then(
        (result) => {
          console.log(result.text)
          alert('Email sent to Brayden Massa (BraydenJMassa@gmail.com)')
          setNameText('')
          setEmailText('')
          setMessageText('')
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <form
      ref={form}
      id='contact-form'
      className={`section-content ${visibility ? 'visible' : ''}`}
      onSubmit={sendEmail}
    >
      <input
        value={nameText}
        onChange={(e) => setNameText(e.target.value)}
        className='contact-form-item contact-text-input'
        name='from_name'
        type='text'
        placeholder='Name'
        autoComplete='off'
      />
      <input
        value={emailText}
        onChange={(e) => setEmailText(e.target.value)}
        className='contact-form-item contact-text-input'
        name='from_email'
        type='text'
        placeholder='Email'
        autoComplete='off'
      />
      <textarea
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        className='contact-form-item'
        name='message'
        id='contact-description'
        rows='6'
        cols='50'
        placeholder='Enter your message here'
      ></textarea>
      <input
        className='contact-form-item contact-submit'
        type='submit'
        value='Submit'
      />
    </form>
  )
}

export default ContactForm
