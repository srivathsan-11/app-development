import React, { useEffect, useState } from 'react';
import '../Assets/About.css';

const About = () => {

  const [data, setData] = useState(0);
  const [data2, setData2] = useState(0);
  const [data3, setData3] = useState(0);
  const [data4, setData4] = useState(0);

  useEffect(()=>{

    setTimeout(() => {
      
      if(data2 !== 1500)
        setData2((prev)=>prev+1);

      if(data !== 1000)
      setData((prev)=>prev+1);

      if(data3 !== 150)
        setData3((prev)=>prev+1);

      if(data4 !== 1547)
      setData4((prev)=>prev+1);
    }, 1);

  },[data,data2,data3,data4]);

  return (
<div>
<div className="fullabout">

    <div className="message-container">
    <h1>HAVE A SEAT AND STAY A WHILE.</h1>
    <hr className="divider" />
    <p>
      Here, hospitality steers the ship, all love stories are welcome, and the planning journey is always informed and inspired by your needs, worries, and wishes. So come on in, share your story, and stay a while. We’re all ears and we can’t wait to custom-craft an event that serves as a catalyst for memories you and yours will hold tight to for a lifetime to come because we’re always game for a great gathering with good company.
    </p>
  </div>

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
      <div className="about1-image">
        {/* <img src="path_to_image.jpg" alt="Alex Quintana" /> */}
      </div>
      <div className="about1-content">
        <h1 style={{fontFamily:'initial',fontSize:'40px'}}>Sri</h1>
        <h2 style={{fontFamily:'initial',fontSize:'30px',marginRight:'540px',marginBottom:'40px'}}>Owner & Creative Director</h2>
        <p>
        An Owner & Creative Director is a dynamic and multifaceted role that combines entrepreneurial leadership with visionary creativity to drive the success of a business. As the owner, this individual is responsible for the overall strategic direction, financial health, and operational efficiency of the company. They set long-term goals, develop business plans, manage budgets, and oversee all administrative functions to ensure the company's growth and profitability. The owner must also navigate the complexities of market trends, competition, and customer needs, making informed decisions to keep the business competitive and relevant.


        </p>
        <p>
        The Owner & Creative Director must stay abreast of industry trends and emerging technologies, continuously seeking ways to innovate and improve. This involves attending industry events, networking with other professionals, and engaging in continuous learning. By doing so, they ensure that their company remains at the forefront of the industry and continues to deliver cutting-edge solutions and products.


        </p>
      </div>
    </div>
    <div className="about2-container">
      <div className="about2-content">
        <h1 style={{fontFamily:'initial',fontSize:'40px',marginLeft:'740px'}}>Vatsan</h1>
        <h2 style={{fontFamily:'initial',fontSize:'30px',marginLeft:'570px',marginBottom:'40px'}}>Senior Event Producer</h2>
        <p style={{marginRight:'20px'}}>
        A Senior Event Producer is a pivotal figure in the event management industry, responsible for the conceptualization, planning, and execution of large-scale events that meet specific client objectives and exceed expectations. This role demands a high level of creativity, strategic thinking, and meticulous attention to detail. The Senior Event Producer collaborates closely with clients to understand their vision, goals, and budget, translating these into a comprehensive event plan that encompasses all aspects from venue selection to entertainment, catering, and technical requirements.
        </p>
        <p style={{marginRight:'20px'}}>
        Key responsibilities include developing and managing timelines, coordinating with vendors, negotiating contracts, and ensuring all logistical elements are seamlessly integrated. The Senior Event Producer also oversees the creation of event materials, such as invitations, programs, and signage, ensuring consistency with the overall theme and branding.
        </p>
      </div>
      <div className="about2-image">
        {/* <img src="path_to_image.jpg" alt="Alex Quintana" /> */}
      </div>
    </div>
    <div className="about3-container">
      <div className="about3-image">
        {/* <img src="path_to_image.jpg" alt="Alex Quintana" /> */}
      </div>
      <div className="about3-content">
        <h1 style={{fontFamily:'initial',fontSize:'40px',marginRight:'680px'}}>Srivatsan</h1>
        <h2 style={{fontFamily:'initial',fontSize:'30px',marginRight:'500px',marginBottom:'40px'}}>Production & Project Manager</h2>
        <p>
        A Production & Project Manager plays a crucial role in overseeing the entire lifecycle of a project, from conception to completion, ensuring that all production processes are executed efficiently, on time, and within budget. This role requires a unique blend of skills, combining the meticulous planning and organizational abilities of a project manager with the technical expertise and operational oversight of a production manager. The primary responsibilities include developing detailed project plans, setting timelines, allocating resources, and coordinating with various departments to ensure seamless workflow and communication. The manager must continuously monitor project progress, identify potential risks or bottlenecks, and implement effective solutions to keep the project on track.


        </p>
        <p>
        In production, the manager is tasked with optimizing the manufacturing process, maintaining high-quality standards, and ensuring compliance with safety regulations. This involves close collaboration with engineers, quality control specialists, and supply chain managers to streamline operations and reduce costs.
        </p>
      </div>
    </div>
   
</div>
</div>
  );
};

export default About;
