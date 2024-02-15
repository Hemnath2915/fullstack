// CreateEvent.jsx
import React, { useState, useEffect } from 'react';
import { AddCircle } from '@mui/icons-material';
import EventForm from './EventForm';
import './CreateEvents.css';

function CreateEvent() {
  const [open2, setOpen2] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [eventName, setEventName] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState([
    // Sample event data
    { id: 1, name: 'Conference', themeCost: 'Rs. 100', rating: 4, description: 'Sample description for Event 1' },
    { id: 2, name: 'Event 2', themeCost: 'Rs. 100', rating: 4, description: 'Sample description for Event 2' },
    { id: 3, name: 'Event 3', themeCost: 'Rs. 100', rating: 4, description: 'Sample description for Event 3' },
  ]);
  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleOpen = (eventName) => {
    setOpen2(true);
    setEventName(eventName);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose = () => {
    setOpen2(false);
    setSelectedEvent(null);
  };

  const handleEdit = (event) => {
    setSelectedEvent(event);
    setOpen2(true);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle the search submission (e.g., send search query to the server)
    console.log('Search term submitted:', searchTerm);
  };

  return (
    <div className="be-overall">
      {/* ... existing code ... */}
      {filteredEvents.map((event) => (
        <div key={event.id} onClick={() => handleOpen(event.name)}>
          {/* ... existing code ... */}
        </div>
      ))}

      {open2 && (
        <EventForm
          onClose={handleClose}
          onSubmit={(formData) => {
            if (selectedEvent) {
              setEvents((prevEvents) =>
                prevEvents.map((prevEvent) =>
                  prevEvent.id === selectedEvent.id ? { ...prevEvent, ...formData } : prevEvent
                )
              );
            } else {
              setEvents((prevEvents) => [...prevEvents, { id: Date.now(), ...formData }]);
            }

            handleClose();
          }}
          event={selectedEvent}
        />
      )}
    </div>
  );
}

export default CreateEvent;
