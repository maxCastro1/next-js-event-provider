import React, {useState,useRef} from "react";
import { useRouter } from "next/router";
const EventPages = ({ event }) => {

  const inputEmail = useRef();
  const router = useRouter();
  const [message, setMessage] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(inputEmail)
    const emailValue = inputEmail.current.value
    const eventId = router?.query.id

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValue.match(validRegex)) {
      setMessage('Please introduce a correct email address');
    }

    try {
      const response = await fetch('/api/email-registration',{
        method: 'POST',
        headers: {
          'content-Type': 'aplication/json'
        },
        body: JSON.stringify({ email: emailValue, eventId:eventId })
      })
      if(!response.ok) throw new Error(`Error:${response.status}`)

      const data = await response.json();
      setMessage(data.message);
      inputEmail.current.value = '';
    } catch (e) {
      console.log('ERROR', e);
      setMessage("this email has already been registered");
    }
  }
  return (
    <div className="cont3">
      <h1>{event.title}</h1>
      <img src={event.image} />
      <h5>Description</h5>
      <p>{event.description}</p>
      <span><u>Contact Us</u></span>
      <label>Get Registered for this event!</label>
      <form className="submit-email" onSubmit={handleSubmit}>
        <input
         ref={inputEmail}
          type='email'
          id='email'
          placeholder="please insert your email" />
        <button type="submit">Submit</button>
      </form>
       <p>{message}</p>
    </div>
  )
}
export default EventPages;