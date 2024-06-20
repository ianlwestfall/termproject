import React from 'react';
import './Home.css';

const Home = () => {
  const dragImage = new Image();
  dragImage.src = `${process.env.PUBLIC_URL}/images/treat.png`; // have to include ${process.env.PUBLIC_URL} for images to work on GitHub Pages

  const handleDragStart = (event) => {
    event.dataTransfer.setDragImage(dragImage, 0, 0);
    event.dataTransfer.setData('text/plain', 'cat-treat');
  };

  return (
    <div className="home-container">
      <div className="left-section">
        <img src={`${process.env.PUBLIC_URL}/images/cartoon-me.png`} alt="cartoon version of me" className="profile-picture" />
      </div>
      <div className="right-section">
        <h1>Hey there, I'm Ian!</h1>
        <p>
          I'm a tech professional and aspiring software developer based in the northwest suburbs of Chicago. You've found my portfolio and project site. It has a little bit about me, my education, and projects I've done or will be doing. You've also got links to my LinkedIn and Github below! Feel free to stay awhile and take a peek around. Just make sure to give my cat Bug a treat on your way out!
        </p>
        <div className="links">
          <a href="https://www.linkedin.com/in/ianlwestfall/" target="_blank" rel="noreferrer">
            <img src={`${process.env.PUBLIC_URL}/images/linkedin.png`} alt="link to LinkedIn" className="social-icon" />
          </a>
          <a href="https://github.com/ianlwestfall" target="_blank" rel="noreferrer">
            <img src={`${process.env.PUBLIC_URL}/images/github.png`} alt="link to GitHub" className="social-icon" />
          </a>
        </div>
        <div className="treats-container">
          <img
            src={`${process.env.PUBLIC_URL}/images/treats.png`}
            alt="cat treats in a jar"
            className="treats"
            draggable="true"
            onDragStart={handleDragStart}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;