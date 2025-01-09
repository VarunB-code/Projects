import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet';


const Contact = () => {
  const form = useRef();

  const [message, setMessage] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5noevby', 'template_y2r3c2q', form.current, {
        publicKey: 'yhHHipRUF0GMsOlCJ',
      })
      .then(
        () => {
          setMessage(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };




  return (

    <>
      <Helmet>
        <title>Contact Me</title>
        <meta name="description" content="Connect with me through the contact section. Whether you have questions, ideas, or just want to say hello, I'm here to listen and collaborate. Let's start a conversation." />

      </Helmet>
      <div className="all-section">
        <h2>Contact</h2>
        <hr className='horizontal-line' />
        <section className='contact-section'>

          {
            message ?
              <div className='success-message'>
                <p>Message sent successfully! I will be in touch with you shortly.</p>
              </div>
              :
              <form ref={form} onSubmit={sendEmail} >
                <input type="text" name="from_name" id="name" placeholder="Name" />
                <input type="email" name="from_email" id="name" placeholder="Email" />
                <input type="phone" name="from_phone" id="name" placeholder="Mobile Number" />
                <textarea name="message" id="message" cols="30" rows="10" placeholder='Message'></textarea>
                <button type="submit">Submit</button>
              </form>
          }


        </section>
      </div>
    </>

  )
}





export default Contact