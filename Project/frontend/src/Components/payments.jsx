// PaymentPage.jsx
import React, { useState } from 'react';
// import Navigation from './Navigation';
import { Link } from 'react-router-dom';


const PaymentPage = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [numberOfHeads, setNumberOfHeads] = useState('');
  const [ageCategory, setAgeCategory] = useState('');

  const handlePayment = () => {
    // Handle payment logic here
    // You can integrate with a payment gateway or perform any other necessary actions
    console.log('Payment processing...');
  };

  return (
    <div>
      <h2>Event Booking Payment</h2>

      <label htmlFor="datePicker">Select Date:</label>
      <input
        type="date"
        id="datePicker"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />

      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your Email"
      />

      <label htmlFor="numberOfHeads">Number of Heads:</label>
      <input
        type="number"
        id="numberOfHeads"
        value={numberOfHeads}
        onChange={(e) => setNumberOfHeads(e.target.value)}
        placeholder="Number of Attendees"
      />

      <label htmlFor="ageCategory">Age Category:</label>
      <select
        id="ageCategory"
        value={ageCategory}
        onChange={(e) => setAgeCategory(e.target.value)}
      >
        <option value="">Select Age Category</option>
        <option value="adult">Adult</option>
        <option value="child">Child</option>
      </select>

      <Link to="/pays"><button onClick={handlePayment}>Proceed to Payment</button></Link>
    </div>
  );
};

export default PaymentPage;
