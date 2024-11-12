import React, { useState } from 'react';
import './style/styles.css';

function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
  };

  return (
    <section className="section__container contact__container" id="contact">
      <h2 className="section__header">Let's Talk With Me!</h2>
      <p className="section__description">
        An open invitation to connect, and exploring collaborative opportunities
        on my personal portfolio website.
      </p>

      <form
        action="https://formspree.io/f/xgveykje"
        method="POST"
        className="contact-form"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows="5"
            placeholder="Your message here"
          ></textarea>
        </div>

        <button type="submit" className="btn">Send Message</button>
        {status && <p>{status}</p>}
      </form>
    </section>
  );
}

export default Contact;
