// // import React, { useEffect, useState } from 'react';
// // import { getConfrimationById } from '../JSON/DB'; // Ensure this function is defined

// // const ConfrimationPage = () => {
// //     const [confrimations, setConfrimations] = useState([]);

// //     useEffect(() => {
// //         const fetchConfrimations = async () => {
// //             try {
// //                 const response = await getConfrimationById();
// //                 setConfrimations(response);
// //             } catch (error) {
// //                 console.error('Error fetching confirmations:', error);
// //             }
// //         };
// //         fetchConfrimations();
// //     }, []);

// //     return (
// //         <div>
// //             <h1>Confirmation Page</h1>
// //             {confrimations.length > 0 ? (
// //                 confrimations.map((confrimation) => (
// //                     <div key={confrimation.confrimId} className="confrimation-item">
// //                         <h2>Event: {confrimation.event.title}</h2>
// //                         <p>Name: {confrimation.name}</p>
// //                         <p>Email: {confrimation.email}</p>
// //                         <p>Phone: {confrimation.phone}</p>
// //                         <p>Booking Date: {new Date(confrimation.bookingDate).toLocaleDateString()}</p>
// //                         <p>Description: {confrimation.describeEvent}</p>
// //                         <p>Address: {confrimation.address}</p>
// //                         <p>Booking Status: {confrimation.bookingstatus ? 'Confirmed' : 'Pending'}</p>
// //                         <p>Payment Status: {confrimation.Paymentstatus ? 'Paid' : 'Unpaid'}</p>
// //                     </div>
// //                 ))
// //             ) : (
// //                 <p>No confirmations available.</p>
// //             )}
// //         </div>
// //     );
// // };

// // export default ConfrimationPage;
// // ===----------------------------------------------------------------

// import React, { useEffect, useState } from 'react';
// import { getAllConfrimations } from '../JSON/DB'; // Ensure this function is defined

// const ConfrimationPage = () => {
//     const [confrimations, setConfrimations] = useState([]);

//     useEffect(() => {
//         const fetchConfrimations = async () => {
//             try {
//                 const response = await getAllConfrimations(); // Fetch all confirmations
//                 setConfrimations(response);
//             } catch (error) {
//                 console.error('Error fetching confirmations:', error);
//             }
//         };
//         fetchConfrimations();
//     }, []);

//     return (
//         <div>
//             <h1>Confirmation Page</h1>
//             {confrimations.length > 0 ? (
//                 confrimations.map((confrimation) => (
//                     <div key={confrimation.confrimId} className="confrimation-item">
//                         <h2>Event: {confrimation.event.title}</h2>
//                         <p>Name: {confrimation.name}</p>
//                         <p>Email: {confrimation.email}</p>
//                         <p>Phone: {confrimation.phone}</p>
//                         <p>Booking Date: {new Date(confrimation.bookingDate).toLocaleDateString()}</p>
//                         <p>Description: {confrimation.describeEvent}</p>
//                         <p>Address: {confrimation.address}</p>
//                         <p>Booking Status: {confrimation.bookingstatus ? 'Confirmed' : 'Pending'}</p>
//                         <p>Payment Status: {confrimation.Paymentstatus ? 'Paid' : 'Unpaid'}</p>
//                     </div>
//                 ))
//             ) : (
//                 <p>No confirmations available.</p>
//             )}
//         </div>
//     );
// };

// export default ConfrimationPage;

// ----------------------------------------------------------------
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Context } from './Globedata'; // Update with the correct path
import { getUserConfrimations } from '../JSON/DB'; // Ensure this function is defined
import { useNavigate, useNavigation } from 'react-router-dom';
import '../Assets/Confirmation.css';
import Navbar from './Navbar';



const ConfrimationPage = () => {
    const navigate = useNavigate();
    const { userData } = useContext(Context); // Use context to get user data
    const [confrimations, setConfrimations] = useState([]);

    const navigateToPayment = () => {
        navigate('/Payment');
    };
    
    useEffect(() => {
        const fetchConfrimations = async () => {
            if (userData && userData.email) {
                try {
                    const response = await getUserConfrimations(userData.email); // Fetch user confirmations by email
                    setConfrimations(response);
                    console.log(response);
                } catch (error) {
                    console.error('Error fetching confirmations:', error);
                }
            }
        };
        
        fetchConfrimations();
    }, [userData]);
    
    
    
    return (
        <>
        <Navbar/>
        <div>
      <h1 style={{fontFamily:'initial',fontSize:'40px',color:'orange',marginLeft:'578px'}}>Confrimation Page</h1>
            {confrimations.length > 0 ? (
                confrimations.map((confrimation) => (
                    <div key={confrimation.confrimId} className="confrimation-item">
                        <h2>Event: {confrimation.event.title}</h2>
                        <p>Name: {confrimation.name}</p>
                        <p>Email: {confrimation.email}</p>
                        <p>Phone: {confrimation.phone}</p>
                        <p>Booking Date:{confrimation.bookingDate}</p>
                        <p>Description: {confrimation.describeEvent}</p>
                        <p>Address: {confrimation.address}</p>
                        <p>Booking Status: {confrimation.bookingstatus ? 'Confirmed' : 'Pending'}</p>
                        <p>Payment Status: {confrimation.Paymentstatus ? 'Paid' : 'Unpaid'}</p>
                        <button onClick={navigateToPayment}>Payment</button>
                    </div>
                ))
            ) : (
                <h1 style={{marginTop:"50px"}}>No confirmations available.</h1>
            )}
        </div>

        <footer className="footer-container" >
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

export default ConfrimationPage;
