import React, { useEffect, useState, useRef } from 'react';
import '../Assets/Home.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
  const [data, setData] = useState(0);
  const [data2, setData2] = useState(0);
  const [data3, setData3] = useState(0);
  const [data4, setData4] = useState(0);
  const [showWeddingMore, setShowWeddingMore] = useState(false);
  const [showCorporateMore, setShowCorporateMore] = useState(false);
  const [showEventPlanningMore, setShowEventPlanningMore] = useState(false);
  const [showDesignStudioMore, setShowDesignStudioMore] = useState(false);
  const [showEarPiercingMore, setShowEarPiercingMore] = useState(false);
  const [showHouseWarmingMore, setShowHouseWarmingMore] = useState(false);

  const navigate = useNavigate();
  const weddingRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (data2 !== 1500) setData2((prev) => prev + 1);
      if (data !== 1000) setData((prev) => prev + 1);
      if (data3 !== 150) setData3((prev) => prev + 1);
      if (data4 !== 2547) setData4((prev) => prev + 1);
    }, 1);

    return () => clearTimeout(timer);
  }, [data, data2, data3, data4]);

  const scrollToWedding = () => {
    weddingRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const aboutHandler = () => {
    navigate('/About');
  };

  return (
    <>
    <Navbar/>
    <div className='fullhome'>
      <div className="ticket-generator-container">
        <div className="text-content">
          <h1>Manage your corperate event with us</h1>
          <p>
            The only solution you need to sell, distribute, and validate personalized event tickets.
          </p>
          <button className="get-started-button" onClick={scrollToWedding}>Get Started</button>
          {/* <p className="promo-text" style={{ color: 'black' }}>First 10 tickets are free</p> */}
        </div>
        <div className="image-content">
          {/* <img src="ticket-image.png" alt="Event ticketing example" /> */}
        </div>
      </div>

      <div className="our-team-container">
        <div className="our-image-section">
          {/* <img src="team-image.jpg" alt="Our Team" /> */}
        </div>
        <div className="text-section">
          <h1 style={{ color:'black', fontStyle: 'italic', fontSize: '80px' }}>Event Management</h1>
          <p className="quote">
            “We specialize in creating unforgettable experiences, ensuring every detail of your event is flawlessly executed. From conceptualization to execution, our team delivers exceptional service tailored to your vision, making your event a memorable success.”
          </p>
        
          <button className="about-us-button" onClick={aboutHandler}>ABOUT US</button>
        </div>
      </div>

      <div className="wedding-planning-container" ref={weddingRef}>
        <div className="text-section">
          <h1 style={{ color: 'black', fontStyle: 'italic', fontSize: '60px' }}>Conferences and Seminars</h1>
          <hr className="separator" />
          <p style={{ color: 'black', fontStyle: 'italic', fontSize: '20px' }}>
          **Conference and Seminar Management**  
          We expertly manage conferences and seminars, ensuring seamless execution from start to finish. Our services include venue selection, speaker coordination, audiovisual setup, and attendee engagement, all tailored to create an informative and impactful experience. Whether it's a large-scale conference or an intimate seminar, we handle every detail to ensure your event runs smoothly and achieves its objectives.
          </p>
          {showWeddingMore && (
            <div className="extra-content">
              <p style={{ color: 'black', fontStyle: 'italic', fontSize: '20px' }}>
              Our team excels in organizing professional conferences and seminars that leave a lasting impact. We handle all aspects, from strategic planning and content development to logistics and on-site management. With a focus on delivering valuable experiences, we ensure that your event not only meets but exceeds expectations
              </p>
              <p style={{ color: 'black', fontStyle: 'italic', fontSize: '20px' }}>
              We manage everything, including speaker arrangements, attendee registration, marketing, and post-event analysis, so you can focus on engaging with your audience and achieving your event goals. Whether you're hosting a small seminar or a large international conference, we provide tailored solutions that make your event a success.
             </p>
            </div>
          )}
          <button className="learn-more-button" style={{ backgroundColor: 'black' }} onClick={() => setShowWeddingMore(!showWeddingMore)}>{showWeddingMore ? 'CLOSE' : 'LEARN MORE'}</button>
        </div>
        <div className="mimage-section">
          {/* <img src="wedding-planning.jpg" alt="Wedding Planning" /> */}
        </div>
      </div>

      <div className="corporate-events-container">
        <div className="cimage-section">
          {/* <img src="corporate-events.jpg" alt="Corporate Events" /> */}
        </div>
        <div className="text-section">
          <h1 style={{ color: 'black', fontSize: '60px', fontStyle: 'italic' }}>Workshops and Training Sessions</h1>
          <hr className="separator" />
          <p style={{ color: 'black', fontStyle: 'italic', fontSize: '20px' }}>
          In corporate event management, workshops and training sessions play a crucial role in fostering professional growth and development. We specialize in organizing these events with precision, ensuring that every detail is tailored to meet the specific needs of your organization
          </p>
              <p style={{ color: 'black', fontStyle: 'italic', fontSize: '20px' }}>
                Our corporate event planning services are designed to deliver exceptional experiences that align with your business goals. From product launches and trade shows to company retreats and holiday parties, we handle every aspect of your event with professionalism and creativity. Our team works closely with you to understand your objectives and create an event that reflects your brand identity and engages your audience.
              </p>
          {showCorporateMore && (
            <div className="extra-content">
              <p style={{ color: 'black', fontStyle: 'italic', fontSize: '20px' }}>
              From initial needs assessment and program design to logistical coordination and participant engagement, we handle all aspects to create a dynamic learning environment. Our services include selecting and briefing expert facilitators, managing venue and equipment arrangements, and incorporating interactive elements to keep participants involved. We also leverage technology for seamless virtual or hybrid sessions, provide comprehensive feedback and evaluation, and offer follow-up support to reinforce learning outcomes. Our aim is to deliver impactful workshops and training sessions that not only enhance skills and knowledge but also inspire and motivate your team, driving success and growth within your organization.
              </p>
            </div>
          )}
          <button className="learn-more-button" style={{ backgroundColor: 'black' }} onClick={() => setShowCorporateMore(!showCorporateMore)}>{showCorporateMore ? 'CLOSE' : 'LEARN MORE'}</button>
        </div>
      </div>

      <div className="event-planning-container">
       
        <div className="text-section">
          <h1 style={{ color: 'black', fontSize: '60px', fontStyle: 'italic' }} className="title">Executive Meetings and Board Meetings</h1>
          <hr className="divider" />
          <p className="description" style={{ color: 'black', fontStyle: 'italic', fontSize: '20px' }}>
          ecutive meetings are focused on the day-to-day operations and tactical decision-making needed to run the company efficiently. These meetings involve the senior management team, such as the CEO, CFO, and other key executives, who discuss and resolve immediate operational issues, implement strategic plans, and review performance metrics. They are more frequent and address the ongoing needs and challenges of the business, aiming to ensure smooth operational functioning and short-term goals.
          </p>
          {showEventPlanningMore && (
            <div className="extra-content">
              <p style={{ color: 'black', fontStyle: 'italic', fontSize: '20px' }}>
              In contrast, board meetings are centered on the broader strategic direction and governance of the organization. They involve the board of directors, which includes external directors and key stakeholders, who provide oversight and strategic guidance. These meetings are less frequent and focus on long-term planning, approving major policies, evaluating the company's overall performance, and ensuring that the executive team aligns with the organization’s vision and mission. Decisions made in board meetings typically have a substantial impact on the company's long-term trajectory.
              </p>
            </div>
          )}
          <button className="learn-more-button" style={{ backgroundColor: 'black' }} onClick={() => setShowEventPlanningMore(!showEventPlanningMore)}>{showEventPlanningMore ? 'CLOSE' : 'LEARN MORE'}</button>
        </div>
        <div className="event-image-section">
          {/* <img src="event-planning.jpg" alt="Event Planning" /> */}
        </div>
      </div>

      
     <div className="backstage-container" style={{width:'1520px'}}>
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
    </div>

    <footer className="footer-container">
                <div className="footer-section">
                    <h3>Use Eventbrite</h3>
                    <ul>
                        <li><a href="#create-events">Create Events</a></li>
                        <li><a href="#event-marketing-platform">Event Marketing Platform</a></li>
                        <li><a href="#community-guidelines">Community Guidelines</a></li>
                        <li><a href="#faqs">FAQs</a></li>
                        <li><a href="#sitemap">Sitemap</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Event plannings</h3>
                    <ul>
                        
                        <li><a href="#event-planning">Event Planning</a></li>
                        
                        <li><a href="#event-payment-system">Event Payment System</a></li>
                        <li><a href="#professional-services">Solutions for Professional Services</a></li>
                        <li><a href="#management-software">Event Management Software</a></li>
                        <li><a href="#halloween-party-planning">Halloween Party Planning</a></li>
                    </ul>
                </div>
                
                <div className="footer-section">
                    <h3>Connect With Us</h3>
                    <ul>
                        <li><a href="ContactUs">Contact Support</a></li>
                        <li><a href="About">About</a></li>
                        <li><a href="#x">X</a></li>
                        <li><a href="#facebook">Facebook</a></li>
                        
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

export default Home;
