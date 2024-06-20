import React from 'react';
import './Footer.css';

const Footer = () => {
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    if (data === 'cat-treat') {
      window.open('https://www.youtube.com/watch?v=BgIgKcqPd4k', '_blank');
    }
  };

  return (
    <footer className="footer" onDragOver={handleDragOver} onDrop={handleDrop}>
      <p>Ian L. Westfall &copy; 2024, All Rights Reserved</p>
      <img
        src={`${process.env.PUBLIC_URL}/images/bug.png`}
        alt="Cartoon version of my cat Bug"
        className="footer-image"
      />
    </footer>
  );
};

export default Footer;