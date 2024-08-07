import React, { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GlobeData } from '../Components/Globedata';
import '../Assets/BookingForm.css';
import { Context } from './Globedata';

const BookingForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { event } = location.state || {};
  const { userData, loggedIn } = useContext(Context);

  const [name, setName] = useState('');
  const [email, setEmail] = useState(userData?.email || '');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!loggedIn) {
      alert('Please log in to make a booking request.');
      return;
    }

    if (email !== userData.nemail) {
      alert('Please use your registered email.');
      return;
    }

    const bookingData = { name, email, phone, event };

    axios.post('/api/booking-requests', bookingData)
      .then(response => {
        alert('Booking request sent!');
        navigate('/Event'); // Navigate back to the previous page
      })
      .catch(error => console.error('Error sending booking request:', error));
  };

  if (!event) {
    return <p>No event data available.</p>;
  }

  return (
    <div className="booking-form">
      <h1>Booking Form</h1>
      <div className="event-details">
        <img src={event.image} alt={event.name} className="event-image" />
        <h2>{event.name}</h2>
        <p>{event.description}</p>
      </div>
      <form onSubmit={handleSubmit}>
       <input 
            type="text" 
            name="name"
            placeholder="Name" 
            className="booking-input" 
            value={name} onChange={(e) => setName(e.target.value)}
            required 
            />
          <input 
            type="email" 
            name="email"
            placeholder="Email" 
            className="booking-input" 
            value={email} onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <input 
            type="tel" 
            name="phone"
            placeholder="Phone" 
            className="booking-input" 
            value={phone} onChange={(e) => setPhone(e.target.value)}
            required 
          />
          <input 
            type="text" 
            name="howDidYouHear"
            placeholder="How did you hear about us?" 
            className="booking-input" 
          />
          <textarea 
            name="eventDescription"
            placeholder="Describe Your Event" 
            className="booking-textarea"
            required
          ></textarea>
          <textarea 
            name="eventDescription"
            placeholder="Event Venue" 
            className="booking-textarea"
            required
          ></textarea>
        <button type="submit">Request Now</button>
      </form>
      <button onClick={() => navigate('/Event')}>Back</button>
    </div>
  );
};

export default BookingForm;
