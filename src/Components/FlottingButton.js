import Link from 'next/link';
import React from 'react';

const PhoneIcon = () => {
    return (
    <div className="phone-icon-container">
      <div className="phone-icon" >
        <Link target="_blank"  href="tel:+917994643673">
        <i className="fas fa-phone"></i>
        </Link>
      </div>
      <div className="whatsapp-icon" >
        <Link target="_blank" href="https://wa.me/+917994643673">
        <i className="fab fa-whatsapp"></i>
        </Link>
      </div>
    </div>
  );
};

export default PhoneIcon;