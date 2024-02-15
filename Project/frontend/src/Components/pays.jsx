// PaymentCard.jsx
import React, { useState } from 'react';
// import './PaymentCard.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';
import './pays.css';


const PaymentCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='pay'><h3>Make Your Payment Here</h3>
    <div
    
      className={`payment-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-content">
        {/* Your payment information input fields go here */}
        <input type="text" placeholder="Card Number" />
        <input type="text" placeholder="Name on Card" />
        <input type="text" placeholder="Expiry Date" />
        <input type="text" placeholder="CVV" />
      </div>
    </div>
    </div>
  );
};

export default PaymentCard;
