// src/components/SocialMedia.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const SocialMedia = () => {
  return (
    <div className="social-media-icons flex justify-center space-x-4 py-4 ">
      <a href="https://www.facebook.com/sanamente.rosario/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebookF} className="text-[#6D767F] text-2xl" />
      </a>
      <a href="https://www.instagram.com/sanamente.rosario/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="text-[#6D767F] text-2xl" />
      </a>
      <a href="https://api.whatsapp.com/send/?phone=543415711104&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} className="text-[#6D767F] text-2xl" />
      </a>
    </div>
  );
};

export default SocialMedia;

