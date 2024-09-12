import React from 'react';

const MapEmbed = () => {
  return (
    <div className="rounded-lg overflow-hidden h-96">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127430.28623021282!2d8.119512300000001!3d9.0820455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103af068a09ffac1%3A0x29fa6ed6baf1fbb!2sNigeria!5e0!3m2!1sen!2sng!4v1631715112068!5m2!1sen!2sng"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="Map of Nigeria"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
