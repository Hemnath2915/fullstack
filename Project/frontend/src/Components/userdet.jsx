
import React from 'react';
import { Link } from 'react-router-dom';
import './userdet.css'

const UserDetailPage = () => {
  // Dummy data for user details and booked events
  const user = {
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 9994521789',
    profilePhoto: 'path/to/user/profile/photo.jpg', // Replace with the actual path
  };

  const bookedEvents = [
    { eventName: 'Birthday', date: '04/24/2023' },
    { eventName: 'Evento', date: '10/17/2003' },
    // Add more booked events as needed
  ];

  return (
    <div className="user-detail-page">
    Hover me!
    <div className="user-detail-page">
      <div className="profile-section">
        <div className="profile-photo">
          <img src="https://img.freepik.com/free-vector/happy-man-online-dating-via-laptop_74855-7495.jpg?w=740&t=st=1707906792~exp=1707907392~hmac=f67e6b07d77a82b6fba690b9186b8ef4421fa3d0c5a382d99f7e9e0c04e76d23" alt="User Profile" />
        </div>
        <div className="user-details">
          <h2>{user.fullName}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          {/* Add more user details as needed */}
        </div>
      </div>

      <div className="booked-events-section">
        <h3>Booked Events</h3>
        <ul>
          {bookedEvents.map((event, index) => (
            <li key={index} className="event-item">
              <p>{event.eventName}</p>
              <p>Date: {event.date}</p>
            </li>
          ))}
        </ul>
      </div>

      <Link to="/Home">Back to Home</Link>
    </div>
    </div>
  );
};

export default UserDetailPage;
