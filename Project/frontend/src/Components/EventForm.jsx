// EventForm.jsx
import React, { useState, useEffect } from 'react';

const EventForm = ({ onClose, onSubmit, event }) => {
  const [formData, setFormData] = useState({
    name: '',
    themeCost: '',
    rating: '',
    description: '',
  });

  useEffect(() => {
    if (event) {
      setFormData({
        name: event.name || '',
        themeCost: event.themeCost || '',
        rating: event.rating || '',
        description: event.description || '',
      });
    }
  }, [event]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <h2>{event ? 'Edit Event' : 'Add Event'}</h2>
      <form onSubmit={handleSubmit}>
        {/* ... form fields ... */}
        <button type="submit">{event ? 'Update' : 'Add'}</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EventForm;
