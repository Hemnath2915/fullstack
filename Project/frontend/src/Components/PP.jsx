// UpcomingEventsPage.jsx

import React from 'react';
import './PP.css';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>EVENTO'S</div>
  );
};
const eventsData = [
  // return(

  

  

  {
    id: 1,
    title: 'Concert',
    imageUrl: 'https://img.freepik.com/premium-photo/people-enjoy-concert-by-dancing-singing-neon-nightclub-created-with-generative-ai-technology_67092-5782.jpg?size=626&ext=jpg&ga=GA1.1.867984061.1707924350&semt=sph',
    description: 'Life milestones celebrated together. From birthdays filled with joy to weddings uniting hearts, create lasting memories with shared experiences.',
  },
  {
    id: 2,
    title: 'Wedding',
    imageUrl: 'https://img.freepik.com/free-photo/authentic-indian-bride-groom-s-hands-holding-together-traditional-wedding-attire_8353-10049.jpg?size=626&ext=jpg&ga=GA1.1.867984061.1707924350&semt=sph',
    description: 'Life milestones celebrated together. From birthdays filled with joy to weddings uniting hearts, create lasting memories with shared experiences.',
  },
  {
    id: 3,
    title: 'Birthday',
    imageUrl: 'https://img.freepik.com/free-photo/happy-birthday-card-with-flowers-assortment_23-2149077343.jpg?size=626&ext=jpg&ga=GA1.1.867984061.1707924350&semt=sph',
    description: 'Life milestones celebrated together. From birthdays filled with joy to weddings uniting hearts, create lasting memories with shared experiences.',
  },
  {
    id: 4,
    title: 'Flying Ingredients',
    imageUrl: 'https://img.freepik.com/premium-photo/woman-cooking-food-kitchen-with-fire-her_662214-21054.jpg?size=626&ext=jpg&ga=GA1.1.867984061.1707924350&semt=sph',
    description: 'Life milestones celebrated together. From birthdays filled with joy to weddings uniting hearts, create lasting memories with shared experiences.',
  },
  {
    id: 5,
    title: 'Workshop',
    imageUrl: 'https://img.freepik.com/premium-photo/business-entrepreneurship-symposium-speaker-giving-talk-business-meeting-audience-conference-hall_1029322-1856.jpg?size=626&ext=jpg&ga=GA1.1.867984061.1707924350&semt=sph',
    description: 'Life milestones celebrated together. From birthdays filled with joy to weddings uniting hearts, create lasting memories with shared experiences.',
  },
  {
    id: 6,
    title: 'Art And Crafts',
    imageUrl: 'https://img.freepik.com/premium-photo/brushes-paints-drawing-composition-table_200402-6617.jpg?size=626&ext=jpg&ga=GA1.1.867984061.1707924350&semt=ais',
    description: 'Life milestones celebrated together. From birthdays filled with joy to weddings uniting hearts, create lasting memories with shared experiences.',
  },
  {
    id: 7,
    title: 'IPL Auction',
    imageUrl: 'https://img.freepik.com/free-photo/baseball-player-hitting-ball_23-2150885061.jpg?size=626&ext=jpg&ga=GA1.1.867984061.1707924350&semt=sph',
    description: 'Life milestones celebrated together. From birthdays filled with joy to weddings uniting hearts, create lasting memories with shared experiences.',
  },
  {
    id: 8,
    title: 'BaBy Showering',
    imageUrl: 'https://img.freepik.com/free-photo/front-view-cute-little-baby-girl-accesories_23-2148415501.jpg?size=626&ext=jpg&ga=GA1.1.867984061.1707924350&semt=ais',
    description: 'Life milestones celebrated together. From birthdays filled with joy to weddings uniting hearts, create lasting memories with shared experiences.',
  },
  {
    id: 9,
    title: 'Singing',
    imageUrl: 'https://img.freepik.com/free-photo/modern-microphone_144627-41319.jpg?size=626&ext=jpg&ga=GA1.1.867984061.1707924350&semt=sph',
    description: 'Life milestones celebrated together. From birthdays filled with joy to weddings uniting hearts, create lasting memories with shared experiences.',
  },
  {
    id: 10,
    title: 'Dancing',
    imageUrl: 'https://img.freepik.com/free-photo/digital-art-carnival-design_23-2151135937.jpg?t=st=1707970750~exp=1707974350~hmac=5a66c513556f52b6f4a8e39173c93a290bb8b886bc8ac21ee192184f7e1fcd01&w=360',
    description: 'Life milestones celebrated together. From birthdays filled with joy to weddings uniting hearts, create lasting memories with shared experiences.',
  },
  
  // )
  // <h23>EVENTO'S</h23>

  // Add more events as needed
];

const PP = () => {
  return (
    
    <div className="events-container">
      {eventsData.map((event) => (
        <div key={event.id} className="event-card">
          <img src={event.imageUrl} alt={event.title} className="event-image" />
          <div className="event-details">
            <h3>{event.title}</h3>
            <p className="event-description">{event.description}</p>
            <Link to="/payments"><button className="book-button">Book Now</button></Link>
          </div>
        </div>
        
      ))}
    </div>
    
  );
};

export default PP;
