import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/EventPage.css';
import weddingImage from '../Assets/Client-Appreciation.jpg';
import diwali from '../Assets/network.jpg'
import nava from '../Assets/conference.jpg'
import cor from '../Assets/corporate-training-workshop.jpeg'
import { Context } from './Globedata';

const initialEvents = [
  {
    id: 1,
    name: 'Networking Events',
    description: 'Networking events are crucial for building professional relationships and fostering business opportunities.Large gatherings where professionals from a specific industry come together to learn, share knowledge, and network.Social events often held after work hours where professionals from various industries can mingle and network. Informal gatherings where attendees can meet new people and make connections in a relaxed environment.Informal meetings over a meal where professionals can discuss business matters and build relationships.',
    image: diwali
  },
  {
    id: 3,
    name: 'Press Conferences',
    description: 'Press conferences are organized events where companies or organizations invite media representatives to make announcements, provide updates, or address issues. Here are key aspects and types of press conferences in corporate management:Highlighting initiatives related to corporate social responsibility (CSR), sustainability efforts, and community engagement.Companies address crises, such as product recalls, scandals, or other negative events, to manage public perception and provide their side of the story.Corporations announce quarterly or annual financial results, including profits, losses, and other significant financial metrics.',
    image: nava
  },
  {
    id: 4,
    name: 'Client Appreciation Events',
    description: 'Client appreciation events are strategically organized gatherings aimed at expressing gratitude to clients for their continued business and support. These events serve as a platform for companies to strengthen relationships, build loyalty, and show appreciation to their clients in a personal and engaging manner. Typically, client appreciation events can take various forms, including elegant dinners, cocktail receptions, exclusive product previews, entertainment events, or even weekend retreats.',
    image: weddingImage
  },
  {
    id: 5,
    name: 'Corporate training workshop',
    description: 'Corporate training workshops are structured programs designed to enhance the skills, knowledge, and performance of employees within an organization. These workshops focus on a wide range of topics, including technical skills, leadership development, communication, team-building, and compliance with industry regulations. Typically led by experienced trainers or subject matter experts, these sessions combine theoretical knowledge with practical exercises, ensuring that participants can apply what they have learned in real-world scenarios.',
    image: cor
  },
 
];

const EventsPage = () => {
  const { loggedIn, isAdmin, isManager } = useContext(Context);
  const [eventsList, setEventsList] = useState(initialEvents);
  const [formVisible, setFormVisible] = useState(false);
  const [newEvent, setNewEvent] = useState({
    name: '',
    description: '',
    image: ''
  });

  const navigate = useNavigate();

  const handleAddEvent = () => {
    setFormVisible(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({
      ...newEvent,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEventWithId = { ...newEvent, id: eventsList.length + 1 };
    setEventsList([...eventsList, newEventWithId]);
    setFormVisible(false);
    setNewEvent({
      name: '',
      description: '',
      image: ''
    });
  };

  const handleDelete = (id) => {
    setEventsList(eventsList.filter(event => event.id !== id));
  };

  const handleBookNow = (event) => {
    navigate('/booking', { state: { event } });
  };

  return (
    <div className="events-page">
      {eventsList.map((event) => (
        <div key={event.id} className="event-division">
          <div className="event-image">
            <img src={event.image} alt={event.name} />
          </div>
          <div className="event-content">
            <h2 className='eventtitle'>{event.name}</h2>
            <p>{event.description}</p>
            <div className="event-buttons">
              <button onClick={() => handleBookNow(event)}>Book Now</button>
              {(isAdmin || isManager) && (
                <button onClick={() => handleDelete(event.id)}>Delete</button>
              )}
            </div>
          </div>
        </div>
      ))}
      {(isAdmin || isManager) && (
        <button className="add-event-button" onClick={handleAddEvent}>Add New Event</button>
      )}
      {formVisible && (
        <form className="event-form" onSubmit={handleSubmit}>
          <h3>Add New Event</h3>
          <input
            type="text"
            name="name"
            value={newEvent.name}
            onChange={handleFormChange}
            placeholder="Event Name"
            required
          />
          <textarea
            name="description"
            value={newEvent.description}
            onChange={handleFormChange}
            placeholder="Event Description"
            required
          />
          <input
            type="text"
            name="image"
            value={newEvent.image}
            onChange={handleFormChange}
            placeholder="Event Image URL"
            required
          />
          <button type="submit">Add</button>
          <button type="button" onClick={() => setFormVisible(false)}>Cancel</button>
        </form>
      )}
    </div>
  );
};

export default EventsPage;
