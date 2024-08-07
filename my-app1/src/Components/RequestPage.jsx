import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RequestPage = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetch pending event requests
    axios.get('/api/booking-requests')
      .then(response => setRequests(response.data))
      .catch(error => console.error('Error fetching booking requests:', error));
  }, []);

  const handleAccept = (requestId, userEmail) => {
    // Accept the booking request
    axios.post(`/api/booking-requests/${requestId}/accept`)
      .then(response => {
        // Send notification to the user
        axios.post('/api/send-notification', { email: userEmail, message: 'Your booking request has been accepted!' })
          .then(response => {
            // Update the request status in the state
            setRequests(requests.filter(request => request.id !== requestId));
          })
          .catch(error => console.error('Error sending notification:', error));
      })
      .catch(error => console.error('Error accepting booking request:', error));
  };

  return (
    <div className="request-page">
      <h1>Event Requests</h1>
      {requests.length > 0 ? (
        requests.map(request => (
          <div key={request.id} className="request-item">
            <div className="request-image">
              <img src={request.event.image} alt={request.event.name} />
            </div>
            <div className="request-content">
              <h2>{request.event.name}</h2>
              <p>{request.event.description}</p>
              <p><strong>Requested by:</strong> {request.name}</p>
              <p><strong>Email:</strong> {request.email}</p>
              <p><strong>Phone:</strong> {request.phone}</p>
              <div className="request-buttons">
                <button onClick={() => handleAccept(request.id, request.email)}>Accept</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No pending requests</p>
      )}
    </div>
  );
};

export default RequestPage;
