import React, { useState } from 'react';
import '../Assets/ContactUs.css';
import { postData } from '../JSON/DB'; // Adjust the import path to your api file
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    howDidYouHear: '',
    eventDescription: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Assuming "Role" and other fields need to be included
    const newUser = {
      username: form.name,
      email: form.email,
      password: 'defaultPassword', // or prompt user for a password
      role: 'user', // Adjust role as needed
      gender: '', // Add gender field if applicable
      state: '', // Add state field if applicable
      country: '', // Add country field if applicable
      languages: [] // Add languages field if applicable
    };

    try {
      // Send form data via API
      await postData(
        newUser.username,
        newUser.email,
        newUser.password,
        newUser.role,
        newUser.gender,
        newUser.state,
        newUser.country,
        newUser.languages
      );

      // Send email using EmailJS
      const response = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form,
        process.env.REACT_APP_EMAILJS_USER_ID
      );

      setStatus('Email sent successfully!');
      setForm({
        name: '',
        email: '',
        phone: '',
        howDidYouHear: '',
        eventDescription: ''
      });
    } catch (error) {
      console.error('Error posting data or sending email:', error); // Log the error details
      setStatus('Failed to send email or post data. Please try again.');
    }
  };

  return (
    <div className="contact-us-container">
      <div className="contact-us-form">
        <h1>CONTACT US</h1>
        <p>Fill out the form below and we will be in contact shortly.</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name"
            value={form.name} 
            onChange={handleChange}
            placeholder="Name" 
            className="form-input" 
            required 
          />
          <input 
            type="email" 
            name="email"
            value={form.email} 
            onChange={handleChange}
            placeholder="Email" 
            className="form-input" 
            required 
          />
          <input 
            type="tel" 
            name="phone"
            value={form.phone} 
            onChange={handleChange}
            placeholder="Phone" 
            className="form-input" 
            required 
          />
          <input 
            type="text" 
            name="howDidYouHear"
            value={form.howDidYouHear} 
            onChange={handleChange}
            placeholder="How did you hear about us?" 
            className="form-input" 
          />
          <textarea 
            name="eventDescription"
            value={form.eventDescription} 
            onChange={handleChange}
            placeholder="Describe Your Event" 
            className="form-textarea"
            required
          ></textarea>
          <button type="submit" className="form-button">SEND</button>
        </form>
        {status && <p className="form-status">{status}</p>}
      </div>
      <div className="contact-us-info">
        <blockquote>
          <p style={{fontFamily:'initial',fontSize:'40px'}}>Great events don't just happen, they are carefully planned and passionately executed.</p>
          <footer>-Unknown</footer>
        </blockquote>
        <p>Full-service event planning & styling throughout the Bay Area, Wine Country and other exclusive destinations.</p>
        <p>Area Office: 123-123-123</p>
        <p>Country Office: 123-123-123</p>
        <p>Email: info@vanmamevents.com</p>
        <div className="social-icons">
          <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#twitter"><i className="fab fa-twitter"></i></a>
          <a href="#pintrest"><i className="fab fa-pinterest-p"></i></a>
          <a href="#insta"><i className="fab fa-instagram"></i></a>
        </div>
        <address>
          vanmam Events, LLC<br />
          1055 Broadway, E4
        </address>
      </div>
    </div>
  );
};

export default ContactUs;
