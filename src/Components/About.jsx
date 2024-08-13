import React, { useEffect, useState } from 'react';
import '../Assets/About.css';
import Navbar from './Navbar';

const About = () => {
  // State variables for dynamic data
  const [data, setData] = useState(0);
  const [data2, setData2] = useState(0);
  const [data3, setData3] = useState(0);
  const [data4, setData4] = useState(0);

  // Effect for updating state variables
  useEffect(() => {
    const timer = setTimeout(() => {
      if (data2 !== 1500) setData2((prev) => prev + 1);
      if (data !== 1000) setData((prev) => prev + 1);
      if (data3 !== 150) setData3((prev) => prev + 1);
      if (data4 !== 1547) setData4((prev) => prev + 1);
    }, 1);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [data, data2, data3, data4]);

  return (
    <>
      <Navbar />

      <div className="fullabout">
        {/* <div className="message-container">
          <h1>HAVE A SEAT AND STAY A WHILE.</h1>
          <hr className="divider" />
          <p>
            Here, hospitality steers the ship, all love stories are welcome,
            and the planning journey is always informed and inspired by your
            needs, worries, and wishes. So come on in, share your story, and
            stay a while. We’re all ears and we can’t wait to custom-craft an
            event that serves as a catalyst for memories you and yours will hold
            tight to for a lifetime to come because we’re always game for a
            great gathering with good company.
          </p>
        </div> */}

        <div className="backstage-container">
          <h2 className="backstage-title">Backstage by the numbers</h2>
          <div className="backstage-stats">
            <div className="stat-item">
              <i className="fas fa-calendar-alt"></i>
              <p className="stat-number">{data}+</p>
              <p className="stat-label">events</p>
            </div>
            <div className="stat-item">
              <i className="fas fa-calendar-check"></i>
              <p className="stat-number">{data2}+</p>
              <p className="stat-label">event planners</p>
            </div>
            <div className="stat-item">
              <i className="fas fa-globe"></i>
              <p className="stat-number">{data3}+</p>
              <p className="stat-label">countries</p>
            </div>
            <div className="stat-item">
              <i className="fas fa-users"></i>
              <p className="stat-number">{data4}+</p>
              <p className="stat-label">attendees</p>
            </div>
          </div>
        </div>

        <div className="about1-container">
        
          <div className="about1-content">
            <h1 style={{ fontFamily: 'initial', fontSize: '40px' }}>Srivathsan</h1>
            <h2 style={{ fontFamily: 'initial', fontSize: '30px', marginRight: '540px', marginBottom: '40px' }}>
              Owner & Creative Director
            </h2>
            <p>
              A seasoned and standout event professional in the northern
              California wedding industry, Alex Quintana puts experience at the
              center of what he does. From his polished and no drama approach to
              planning events to a deep appreciation for hosting anyone who’s
              ready to chat over a cappuccino (or two), one thing is for sure—
              Alex is dedicated to a process built on integrity and service
              excellence.
            </p>
            <p>
              His heartfelt desire to create magic for his clients has earned him
              the shining reviews that mean the most to him—those of his clients,
              vendor partners, and venues. A leader and lover of logistics, Alex
              is always mindful to mix his passion with patience (and a bit of
              humor) because there is nothing better than the handshakes and
              hugs of grateful clients and an energized team.
            </p>
          </div>
        </div>

        <div className="about2-container">
          <div className="about2-content">
            <h1 style={{ fontFamily: 'initial', fontSize: '40px', marginLeft: '740px' }}>Sanjay</h1>
            <h2 style={{ fontFamily: 'initial', fontSize: '30px', marginLeft: '570px', marginBottom: '40px' }}>
              Senior Event Producer
            </h2>
            <p style={{ marginRight: '20px' }}>
              Since joining in 2014, Heather’s gifts of organization, concept
              design, and contagious enthusiasm have earned her an
              ever-increasing role in planning and coordinating numerous
              Quintana Events weddings. As part of our Senior Team, Heather
              plays a vital role in the direction and strategic planning within
              the company. Combining her unique eye for design, over 8 years of
              wedding coordination & experience in venue and catering management,
              Heather knows how to plan & execute truly unforgettable events. She
              strives to bring her clients’ visions to life & make their wedding
              day as fun & worry-free as possible.
            </p>
            <p style={{ marginRight: '20px' }}>
              His heartfelt desire to create magic for his clients has earned him
              the shining reviews that mean the most to him—those of his clients,
              vendor partners, and venues. A leader and lover of logistics, Alex
              is always mindful to mix his passion with patience (and a bit of
              humor) because there is nothing better than the handshakes and
              hugs of grateful clients and an energized team.
            </p>
          </div>
          
        </div>

        <div className="about3-container">
        
          <div className="about3-content">
            <h1 style={{ fontFamily: 'initial', fontSize: '40px', marginRight: '680px' }}>Vinay</h1>
            <h2 style={{ fontFamily: 'initial', fontSize: '30px', marginRight: '500px', marginBottom: '40px' }}>
              Production & Project Manager
            </h2>
            <p>
              Whether it’s making her home a cozy safe haven, choosing an
              intimate romantic restaurant for date night, or curating a fun
              upbeat picnic with friends – she knows how to create just the
              right ‘vibe’ for any occasion. This innate talent made her
              transition into events a no-brainer. Simone began in the industry 6
              years ago, where she worked in a variety of roles supporting the
              corporate and tech spaces. She joined Quintana in 2021 and
              hasn’t looked back since! Her attention to detail and can-do
              attitude has her constantly wearing different hats from managing
              production tasks to leading staff and vendors on the day-of.
            </p>
            <p>
              Simone was born and raised in San Francisco and attended Sonoma
              State University where she got her degree in Communications and
              Media Studies. After college she moved back down to the Bay Area
              where she currently resides. When Simone isn’t on the job she
              loves to travel (anywhere and everywhere!), hit up a yoga class,
              try all the international cuisines the Bay Area has to offer, and
              spend time outdoors in the sun.
            </p>
          </div>
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

export default About;
