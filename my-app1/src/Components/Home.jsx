import React, { useEffect, useState, useRef } from 'react';
import '../Assets/Home.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';

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
    <div className='fullhome'>
      <div className="ticket-generator-container">
        <div className="text-content">
          <h1>Event ticketing made easy with Ticket Generator</h1>
          <p>
            The only solution you need to sell, distribute, and validate personalized event tickets.
          </p>
          <button className="get-started-button" onClick={scrollToWedding}>Get Started</button>
          <p className="promo-text" style={{ color: 'yellow' }}>First 10 tickets are free</p>
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
          <h1 style={{ color: 'yellow', fontStyle: 'italic', fontSize: '80px' }}>What are corporate events?</h1>
          <p className="quote">
          A corporate event is an event sponsored by a company and focuses on either its employees or clients. There are many reasons for organizing a corporate event, including:
To educate staff or members of the public regarding various concepts promoted by the organization
To motivate employees by rewarding them for their work

          </p>
          <p className="author">Kara Michelle, 2023 Bride</p>
          <button className="about-us-button" onClick={aboutHandler}>ABOUT US</button>
        </div>
      </div>

      <div className="wedding-planning-container" ref={weddingRef}>
        <div className="text-section">
          <h1 style={{ color: 'yellow', fontStyle: 'italic', fontSize: '60px' }}>Conferences</h1>
          <hr className="separator" />
          <p style={{ color: 'yellow', fontStyle: 'italic', fontSize: '20px' }}>
          The primary purpose of a conference is to connect with target audiences and give them relevant information, usually to educate or motivate them. They're also useful occasions for promoting networking and collaboration between attendees. Conferences typically last at least a full day, occur at conference centers or hotels and feature a keynote speaker, as well as many other speaking sessions on different topics.
          </p>
          {showWeddingMore && (
            <div className="extra-content">
              <p style={{ color: 'yellow', fontStyle: 'italic', fontSize: '20px' }}>
                At Quintana Events, we believe that every wedding is a unique love story waiting to be told. Our team of experienced wedding planners is dedicated to bringing your vision to life with meticulous attention to detail and a deep understanding of your personal style. From the initial consultation to the final farewell, we are with you every step of the way, ensuring that every moment is flawlessly executed.
              </p>
              <p style={{ color: 'yellow', fontStyle: 'italic', fontSize: '20px' }}>
                Our services include full wedding planning, partial planning, and day-of coordination. Whether you need comprehensive support or just a helping hand on the big day, we tailor our services to meet your needs. Our extensive network of trusted vendors allows us to provide you with the best options for venues, catering, photography, entertainment, and more. We take pride in creating seamless, stress-free experiences that allow you to enjoy your special day to the fullest.
              </p>
              <p style={{ color: 'yellow', fontStyle: 'italic', fontSize: '20px' }}>
                In addition to traditional wedding planning, we offer specialized services such as destination weddings, elopements, and multicultural celebrations. Our team is well-versed in handling the unique challenges and intricacies of planning weddings that incorporate diverse cultural traditions and customs. We are committed to creating a celebration that honors your heritage and tells your love story in a meaningful way.
              </p>
            </div>
          )}
          <button className="learn-more-button" style={{ backgroundColor: 'green' }} onClick={() => setShowWeddingMore(!showWeddingMore)}>{showWeddingMore ? 'CLOSE' : 'LEARN MORE'}</button>
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
          <h1 style={{ color: 'yellow', fontSize: '60px', fontStyle: 'italic' }}>Product launches</h1>
          <hr className="separator" />
          <p style={{ color: 'yellow', fontStyle: 'italic', fontSize: '20px' }}>
          As their name suggests, launches are corporate events to announce a company's new product or service. Their role is usually to inform potential clients and the media regarding the new product or service. However, companies also aim to expand the level of awareness beyond the people attending the launch.
          </p>
              <p style={{ color: 'yellow', fontStyle: 'italic', fontSize: '20px' }}>
                Our corporate event planning services are designed to deliver exceptional experiences that align with your business goals. From product launches and trade shows to company retreats and holiday parties, we handle every aspect of your event with professionalism and creativity. Our team works closely with you to understand your objectives and create an event that reflects your brand identity and engages your audience.
              </p>
          {showCorporateMore && (
            <div className="extra-content">
              <p style={{ color: 'yellow', fontStyle: 'italic', fontSize: '20px' }}>
                We offer a range of services, including event strategy and concept development, venue selection, logistics management, audiovisual production, and on-site coordination. Our goal is to provide you with a seamless planning process and a successful event that leaves a lasting impression on your attendees. We also offer virtual and hybrid event solutions to help you reach a wider audience and adapt to the changing landscape of corporate events.
              </p>
              <p style={{ color: 'yellow', fontStyle: 'italic', fontSize: '20px' }}>
                In addition to planning corporate events, we provide team-building activities and workshops designed to foster collaboration and boost morale among your employees. Our programs are customized to meet the unique needs of your team and can be integrated into your corporate events or offered as standalone experiences. We believe that a well-executed corporate event has the power to inspire, motivate, and strengthen your team.
              </p>
            </div>
          )}
          <button className="learn-more-button" style={{ backgroundColor: 'green' }} onClick={() => setShowCorporateMore(!showCorporateMore)}>{showCorporateMore ? 'CLOSE' : 'LEARN MORE'}</button>
        </div>
      </div>

      <div className="event-planning-container">
       
        <div className="text-section">
          <h1 style={{ color: 'yellow', fontSize: '60px', fontStyle: 'italic' }} className="title">Appreciation ceremonies</h1>
          <hr className="divider" />
          <p className="description" style={{ color: 'yellow', fontStyle: 'italic', fontSize: '20px' }}>
          This kind of event has the purpose of showing appreciation for either the company's employees or its clients. They're usually informal with a wide range of potential activities. Some of the most popular venues are restaurants, theaters, sporting arenas, musical venues, popular events and holiday spots.
          </p>
          {showEventPlanningMore && (
            <div className="extra-content">
              <p style={{ color: 'yellow', fontStyle: 'italic', fontSize: '20px' }}>
                At Quintana Events, we specialize in creating unforgettable experiences for all types of events. From intimate gatherings to grand celebrations, our team of event planners is dedicated to bringing your vision to life. We offer a range of services, including event design, coordination, and management, to ensure that every detail is taken care of.
              </p>
              <p style={{ color: 'yellow', fontStyle: 'italic', fontSize: '20px' }}>
                Our event planning services are tailored to meet the unique needs of each client. Whether you're planning a wedding, corporate event, or social gathering, we work closely with you to understand your goals and create a customized plan that fits your budget and timeline. Our extensive network of vendors and suppliers allows us to provide you with the best options for venues, catering, entertainment, and more.
              </p>
              <p style={{ color: 'yellow', fontStyle: 'italic', fontSize: '20px' }}>
                In addition to our planning services, we offer on-site coordination to ensure that your event runs smoothly from start to finish. Our team is experienced in managing all aspects of event logistics, including setup, teardown, and troubleshooting. We are committed to providing you with a stress-free planning process and an unforgettable event experience.
              </p>
            </div>
          )}
          <button className="learn-more-button" style={{ backgroundColor: 'green' }} onClick={() => setShowEventPlanningMore(!showEventPlanningMore)}>{showEventPlanningMore ? 'CLOSE' : 'LEARN MORE'}</button>
        </div>
        <div className="event-image-section">
          {/* <img src="event-planning.jpg" alt="Event Planning" /> */}
        </div>
      </div>

      <div className="d-events-container">
        <div className="dimage-section">
          {/* <img src="design-studio.jpg" alt="Design Studio" /> */}
        </div>
        <div className="text-section">
          <h1 style={{ color: 'yellow', fontSize: '60px', fontStyle: 'italic' }}> Board meetings</h1>
          <hr className="separator" />
          <p style={{ color: 'yellow', fontSize: '20px', fontStyle: 'italic' }}>
          Board meetings are opportunities for members of an organization's board of directors to get together and review the company's activity and performance. Board members often use the conclusions drawn after board meetings to draw conclusions regarding the company's future strategies. They're typically held at specific time intervals, and their venue depends on the organization's size.
          </p>
          {showDesignStudioMore && (
            <div className="extra-content">
              <p style={{ color: 'yellow', fontStyle: 'italic', fontSize: '20px' }}>
                Our Design Studio offers a comprehensive range of services to elevate your event or space to new heights. We specialize in creating custom designs that reflect your personal style and vision. Our team of designers works closely with you to understand your preferences and bring your ideas to life.
              </p>
              <p style={{ color: 'yellow', fontStyle: 'italic', fontSize: '20px' }}>
                Our services include floral design, lighting design, and tabletop decor. We also offer custom builds and specialty furniture installations to create unique and memorable environments for your event or space. Whether you're planning a wedding, corporate event, or interior design project, our team is dedicated to providing you with the highest level of service and quality.
              </p>
              <p style={{ color: 'yellow', fontStyle: 'italic', fontSize: '20px' }}>
                In addition to our design services, we offer styling and staging services to ensure that every detail is perfect. Our team is experienced in creating cohesive and visually stunning designs that will leave a lasting impression on your guests. We are committed to providing you with a seamless and stress-free design process, from concept to execution.
              </p>
            </div>
          )}
          <button className="learn-more-button" style={{ backgroundColor: 'green' }} onClick={() => setShowDesignStudioMore(!showDesignStudioMore)}>{showDesignStudioMore ? 'CLOSE' : 'LEARN MORE'}</button>
        </div>
      </div>

      <div className="ear-piercing-container">
        <div className="text-section">
          <h1 style={{ color: 'yellow', fontSize: '60px', fontStyle: 'italic' }}>Company milestones</h1>
          <hr className="separator" />
          <p style={{ color: 'yellow', fontSize: '20px', fontStyle: 'italic' }}>
          Some companies choose to host celebratory events for various milestones or anniversaries. Their size and scope vary depending on the company's nature, but they tend to be similar in structure to appreciation events. They range from small internal celebrations to large events that include customers, vendors and local community members.
          </p>
          {showEarPiercingMore && (
            <div className="extra-content">
              <p style={{ color: 'yellow', fontStyle: 'italic', fontSize: '20px' }}>
              Financial milestones like securing venture capital, progressing through various funding rounds, achieving profitability, or launching an Initial Public Offering (IPO) signal the company's financial health and investor confidence. Product and innovation milestones, such as obtaining patents, trademarks, and industry awards, launching new and groundbreaking products, and entering new markets, highlight the company's commitment to innovation and its impact on the industry. 
              </p>
              <p style={{ color: 'yellow', fontStyle: 'italic', fontSize: '20px' }}>
              As the company expands, reaching revenue milestones such as the first $1 million or $10 million in sales, hiring key employees, and opening new offices or international branches are notable indicators of growth and scalability.
              </p>
              <p style={{ color: 'yellow', fontStyle: 'italic', fontSize: '20px' }}>
              Product and innovation milestones, such as obtaining patents, trademarks, and industry awards, launching new and groundbreaking products, and entering new markets, highlight the company's commitment to innovation and its impact on the industry. Each of these milestones not only marks a significant achievement but also serves as a moment to reflect on past successes, plan for future endeavors, and boost the morale of employees, stakeholders, and customers.
              </p>
            </div>
          )}
          <button className="learn-more-button" style={{ backgroundColor: 'green' }} onClick={() => setShowEarPiercingMore(!showEarPiercingMore)}>{showEarPiercingMore ? 'CLOSE' : 'LEARN MORE'}</button>
        </div>
        <div className="eimage-section">
          {/* <img src="ear-piercing.jpg" alt="Ear Piercing" /> */}
        </div>
      </div>

      <div className="house-warming-container">
        <div className="himage-section">
          {/* <img src="house-warming.jpg" alt="House Warming" /> */}
        </div>
        <div className="text-section">
          <h1 style={{ color: 'yellow', fontSize: '60px', fontStyle: 'italic' }}> Company or industry sports tournaments</h1>
          <hr className="separator" />
          <p style={{ color: 'yellow', fontSize: '20px', fontStyle: 'italic' }}>
         
          Companies host various sports tournaments among their employees or across departments to get employees and their families to interact with one another. In corporate sports events, more companies within the same industry send some of their employees to represent them in a friendly competition. Depending on the exact sport, corporate sports tournaments can take place in public parks or specialized venues.
          </p>
          {showHouseWarmingMore && (
            <div className="extra-content">
              <p style={{ color: 'yellow', fontStyle: 'italic', fontSize: '20px' }}>
              Company or industry sports tournaments are dynamic events that foster teamwork, camaraderie, and a healthy competitive spirit among employees or industry peers. These tournaments, which can include a variety of sports such as soccer, basketball, tennis, or golf, serve as a platform for participants to engage in physical activity, relieving stress and promoting wellness. 
              </p>
              <p style={{ color: 'yellow', fontStyle: 'italic', fontSize: '20px' }}>
              Industry-wide tournaments offer the additional benefit of networking opportunities, bringing together professionals from different organizations to compete, collaborate, and share experiences. These events can also enhance a company's reputation within its industry, showcasing its commitment to employee well-being and community engagement. 
              </p>
             
            </div>
          )}
          <button className="learn-more-button" style={{ backgroundColor: 'green' }} onClick={() => setShowHouseWarmingMore(!showHouseWarmingMore)}>{showHouseWarmingMore ? 'CLOSE' : 'LEARN MORE'}</button>
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
  );
};

export default Home;
