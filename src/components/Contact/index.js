import React from "react";

import "./contact.scss";

export default class ContactForm extends React.Component {
  render() {
    return (
      <div className='contact-wrapper'>
        <div className='contact-inner'>
          <div className='contact-header'>
            <h1>Contact</h1>
            <div className='highlight-contact'>
              Have a question or want to work together?
            </div>
          </div>

          <div>
            <form className='contact-form'>
              <input
                placeholder='First Name'
                type='text'
                name='firstName'
                required
              ></input>
              <input
                placeholder='Last Name'
                type='text'
                name='lastName'
                required
              ></input>
              <input
                placeholder='Enter email'
                type='email'
                name='email'
                required
              ></input>
              <textarea
                placeholder='Your Message'
                type='text'
                name='message'
              ></textarea>
              <div></div>
              <button className='btn-submit' type='submit' value='SUBMIT'>
                Submit{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
