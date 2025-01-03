import React from "react";


const ContactUs = () => {
  return (
    <div id="contact-us-section" className="contact-us-container">
      <h1 id="contact-us-title" className="main-heading">
        Contact Us
      </h1>
      <p className="contact-us-intro">
        Have questions, feedback, or just want to say hello? We'd love to hear from you! Reach out
        to us through any of the options below, and we'll get back to you as soon as possible.
      </p>
      <br />
      <h2 className="sub-heading">Our Contact Details</h2>
      <ul id="contact-details-list" className="contact-details-list">
        <li>
          <strong>Phone:</strong> +91 98765 43210
        </li>
        <li>
          <strong>Email:</strong> support@feriwalaflavours.com
        </li>
        <li>
          <strong>Address:</strong> 123 Foodie Lane, Flavour Town, India
        </li>
      </ul>
      <br />
      <h2 className="sub-heading">Follow Us</h2>
      <p className="social-media-text">
        Stay connected with us on social media to get the latest updates and mouthwatering offers!
      </p>
      <ul id="social-media-list" className="social-media-list">
        <li>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </li>
        <li>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </li>
        <li>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </li>
      </ul>
      <br />
      <h2 className="sub-heading">Drop Us a Message</h2>
      <form id="contact-form" className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" className="form-input" placeholder="Your Name" />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-input"
          placeholder="Your Email"
        />
        <br />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          className="form-textarea"
          placeholder="Your Message"
        ></textarea>
        <br />
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
