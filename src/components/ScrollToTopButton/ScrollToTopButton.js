import React, { useEffect } from 'react';
import './ScrollToTopButton.css';

const ScrollToTopButton = () => {
  useEffect(() => {
    const myButton = document.getElementById('scrollButton');

    const scrollFunction = () => {
      myButton.style.display = document.documentElement.scrollTop > 20 ? 'block' : 'none';
    };

    window.addEventListener('scroll', scrollFunction);

    return () => {
      window.removeEventListener('scroll', scrollFunction);
    };
  }, []);

  const topFunction = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <button onClick={topFunction} id="scrollButton" title="Go to top">
      ↑
    </button>
  );
};

export default ScrollToTopButton;