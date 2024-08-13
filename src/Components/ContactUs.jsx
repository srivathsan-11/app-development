import React, { useState } from 'react';
import '../Assets/ContactUs.css';
import { postData } from '../JSON/DB'; 
import Navbar from './Navbar';





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
    <>
    <Navbar/>
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
       
      </div>
    </div>

    <footer className="footer-container">
                <div className="footer-section">
                    <h3>Use Eventbrite</h3>
                    <ul>
                        <li><a href="#create-events">Create Events</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#event-marketing-platform">Event Marketing Platform</a></li>
                        <li><a href="#mobile-ticket-app">Eventbrite Mobile Ticket App</a></li>
                        <li><a href="#check-in-app">Eventbrite Check-In App</a></li>
                        <li><a href="#app-marketplace">Eventbrite App Marketplace</a></li>
                        <li><a href="#registration-software">Event Registration Software</a></li>
                        <li><a href="#community-guidelines">Community Guidelines</a></li>
                        <li><a href="#faqs">FAQs</a></li>
                        <li><a href="#sitemap">Sitemap</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Plan Events</h3>
                    <ul>
                        <li><a href="#sell-tickets-online">Sell Tickets Online</a></li>
                        <li><a href="#event-planning">Event Planning</a></li>
                        <li><a href="#sell-concert-tickets-online">Sell Concert Tickets Online</a></li>
                        <li><a href="#event-payment-system">Event Payment System</a></li>
                        <li><a href="#professional-services">Solutions for Professional Services</a></li>
                        <li><a href="#management-software">Event Management Software</a></li>
                        <li><a href="#halloween-party-planning">Halloween Party Planning</a></li>
                        <li><a href="#virtual-events-platform">Virtual Events Platform</a></li>
                        <li><a href="#qr-codes-check-in">QR Codes for Event Check-In</a></li>
                        <li><a href="#post-your-event-online">Post your event online</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Find Events</h3>
                    <ul>
                        <li><a href="#new-orleans-food-drink">New Orleans Food & Drink Events</a></li>
                        <li><a href="#san-francisco-holiday">San Francisco Holiday Events</a></li>
                        <li><a href="#tulum-music">Tulum Music Events</a></li>
                        <li><a href="#denver-hobby">Denver Hobby Events</a></li>
                        <li><a href="#atlanta-pop-music">Atlanta Pop Music Events</a></li>
                        <li><a href="#new-york">New York Events</a></li>
                        <li><a href="#chicago">Chicago Events</a></li>
                        <li><a href="#dallas-today">Events in Dallas Today</a></li>
                        <li><a href="#los-angeles">Los Angeles Events</a></li>
                        <li><a href="#washington">Washington Events</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Connect With Us</h3>
                    <ul>
                        <li><a href="ContactUs">Contact Support</a></li>
                        <li><a href="About">About</a></li>
                        <li><a href="#x">X</a></li>
                        <li><a href="#facebook">Facebook</a></li>
                        <li><a href="#linkedin">LinkedIn</a></li>
                        <li><a href="#instagram">Instagram</a></li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Eventbrite</p>
                    <p>
                        <a href="About">About</a> &bull; <a href="#blog">Blog</a> &bull; <a href="ContactUs">Help</a> &bull;
                        <a href="#careers">Careers</a> &bull; <a href="#press">Press</a> &bull; <a href="#impact">Impact</a> &bull;
                        <a href="#investors">Investors</a> &bull; <a href="#security">Security</a> &bull; <a href="#developers">Developers</a> &bull; 
                        <a href="#status">Status</a> &bull; <a href="#terms">Terms</a> &bull; <a href="#privacy">Privacy</a> &bull; 
                        <a href="#accessibility">Accessibility</a> &bull; <a href="#cookies">Cookies</a>
                    </p>
                    <p><a href="#manage-cookie-preferences">Manage Cookie Preferences</a></p>
                </div>
            </footer>
            </>
  );
};

export default ContactUs;
// ----------------------------------------------------------------

// export default function Contact() {
//   const [result, setResult] = React.useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "a9224858-e06e-4785-875c-2d0980cd1148");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };
// }
//   return (
//     <div>
//        <div className="contact-us-container">
         
//        <div className="contact-us-form">
//         <h1>CONTACT US</h1>
//       <p>Fill out the form below and we will be in contact shortly.</p>
//       <form onSubmit={onSubmit}>
//                 <input 
//                       type="text" 
//                       name="name"
//                       // value={form.name} 
//                       // onChange={handleChange}
//                       placeholder="Name" 
//                       className="form-input" 
//                       required 
//                       />
//                     <input 
//                       type="email" 
//                       name="email"
//                       // value={form.email} 
//                       // onChange={handleChange}
//                       placeholder="Email" 
//                       className="form-input" 
//                       required 
//                       />
//                     <input 
//                       type="tel" 
//                       name="phone"
//                       // value={form.phone} 
//                       // onChange={handleChange}
//                       placeholder="Phone" 
//                       className="form-input" 
//                       required 
//                       />
//                     <input 
//                       type="text" 
//                       name="howDidYouHear"
//                       // value={form.howDidYouHear} 
//                       // onChange={handleChange}
//                       placeholder="How did you hear about us?" 
//                       className="form-input" 
//                       />
//                     <textarea 
//                       name="eventDescription"
//                       // value={form.eventDescription} 
//                       // onChange={handleChange}
//                       placeholder="Describe Your Event" 
//                       className="form-textarea"
//                       required
//                       ></textarea>
//                     <button type="submit" className="form-button">SEND</button>
//       </form>
//       </div>
//     </div>
//   );

//   }

