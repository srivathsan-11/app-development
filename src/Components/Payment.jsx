import React, { useState } from 'react';
import { TextField, Button, Alert } from '@mui/material';
import SelectMUI from './SelectMUI';
import { useNavigate } from 'react-router-dom';
import '../Assets/Payment.css'; // Ensure you have this CSS file for styles
import Navbar from './Navbar';

function Payment() {
  const [cardno, setCardno] = useState("");
  const [cardname, setCardname] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [ccv, setCcv] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

    const handlePay = (e) => {
        e.preventDefault();
        navigate("/PaymentDone");
    }

  const validateForm = () => {
    if (cardno.includes('#')) {
      setError("Please enter a valid card number");
      return false;
    }
    if (!cardname.match(/^[a-zA-Z\s]+$/)) { // Added support for spaces in card names
      setError("Please enter a valid card name");
      return false;
    }
    if (year === "") {
      setError("Please select year");
      return false;
    }
    if (month === "") {
      setError("Please select month");
      return false;
    }
    if (ccv === "") {
      setError("Please enter CCV");
      return false;
    }
    setError("");
    return true;
  }

  const handlePayForm = (event) => {
    event.preventDefault();
    if (validateForm()) {
      navigate('/PaymentDone');
    }
  }

  return (
    <>
    <Navbar/>
    <div className="payment-total">
      <div className="cardbox">
        <i className="fa-brands fa-cc-visa"></i>
        <h4>BANK NAME</h4>
        <div className="cardnumber">{cardno}</div>
        <span className="label">Holder Name</span>
        <span className="label expiry-label">Expiry</span>
        <div className="cardholder">{cardname}</div>
        <div className='expiry-year'>{month} {year}</div>
      </div>
      <form className="payment-form" onSubmit={handlePayForm}>
        {error && <Alert severity="error">{error}</Alert>}
        <TextField
          id="card-number"
          label="Card Number"
          variant="outlined"
          onChange={(e) => setCardno(e.target.value)}
          fullWidth
          margin="normal"
          />
        <TextField
          id="card-holder"
          label="Card Holder"
          variant="outlined"
          onChange={(e) => setCardname(e.target.value)}
          fullWidth
          margin="normal"
          />
        <div className="card-year">
          <SelectMUI dat={month} func={setMonth} attribute={"Month"} />
          <SelectMUI dat={year} func={setYear} attribute={"Year"} />
          <TextField
            id="ccv"
            label="CCV"
            variant="outlined"
            value={ccv}
            onChange={(e) => setCcv(e.target.value)}
            fullWidth
            margin="normal"
            />
        </div>
        <Button id="pay-button" type="submit" variant="contained" color="primary" onClick={handlePay}>
          Pay
        </Button>
      </form>
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
  )
}

export default Payment;
