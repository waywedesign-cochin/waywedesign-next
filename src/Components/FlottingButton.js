import React from 'react';

const PhoneIcon = () => {
  const phoneNumber = '+917994643673'; 
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  const handleWhatsappClick = () => {
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="phone-icon-container">
      <div className="phone-icon" onClick={handlePhoneClick}>
        <i className="fas fa-phone"></i>
      </div>
      <div className="whatsapp-icon" onClick={handleWhatsappClick}>
        <i className="fab fa-whatsapp"></i>
      </div>
    </div>
  );
};

export default PhoneIcon;