// src/App.js
import React, { useContext } from 'react';
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import ProfilePage from './Components/ProfilePage';
import UserManagementPage from './Components/UserManagementPage';
import RequestPage from './Components/RequestPage';
import EventsPage from './Components/EventsPage';
import { Context } from '../src/Components/Globedata'; // Adjust path as needed
import { Route, Routes, Navigate } from 'react-router-dom';
import BookingForm from './Components/BookingForm';

const App = () => {
  const { loggedIn, isAdmin, isManager } = useContext(Context);

  const ProtectedRoute = ({ element: Component, allowedRoles }) => {
    if (!loggedIn) {
      return <Navigate to='/Log' />;
    }
    if (!allowedRoles.some(role => (role === 'admin' && isAdmin) || (role === 'manager' && isManager))) {
      return <Navigate to='/Navbar' />;
    }
    return <Component />;
  };

  return (
    <Routes>
      <Route path='/' exact element={<Navbar />} />
      <Route path='/Log' element={<Login />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/Navbar' element={<Navbar />} />
      <Route path='/Register' element={<Register />} />
      <Route path='/About' element={<About />} />
      <Route path='/Pro' element={<ProfilePage />} />
      <Route 
        path='/Admin' 
        element={<ProtectedRoute element={UserManagementPage} allowedRoles={['admin', 'manager']} />} 
      />
      <Route 
        path='/Request' 
        element={<ProtectedRoute element={RequestPage} allowedRoles={['admin', 'manager']} />} 
      />
      <Route path="/ProfilePage" element={<ProfilePage />} />
      <Route 
        path="/UserManagementPage" 
        element={<ProtectedRoute element={UserManagementPage} allowedRoles={['admin', 'manager']} />} 
      />
      <Route path="/booking" element={<BookingForm />} />
      <Route path="/Event" element={<EventsPage />} />
    </Routes>
  );
};

export default App;
