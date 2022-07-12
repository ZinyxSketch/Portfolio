import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("mlezypbj");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
        <form onSubmit={handleSubmit} className="Contact-Form">
            <section className="Contact-Form-Message">
            <h1>Say hellllooo!</h1>
        
            <label htmlFor="email">
                Email Address
            </label>
            <input
                id="email"
                type="email" 
                name="email"
                placeholder='kiki@deliveryservice.jiji'
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <label htmlFor="message">Message</label>
            <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="konnichiwa! Wanna collab? :)"
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}
                className="Primary-Button">
            Send Message
            </button>
        </section>
        <img src="assets/images/gaminggirl.png" alt="gaming-girl" loading="lazy"/>
        </form>
  );
}
