import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <hr></hr>
      <h1>XKCD Passphrase Generator (Alpha)</h1>

      <div className="screenshots">
        <img src={`${process.env.PUBLIC_URL}/images/screenshot1.jpg`} alt="Screenshot 1" />
        <img src={`${process.env.PUBLIC_URL}/images/screenshot2.jpg`} alt="Screenshot 2" />
        <img src={`${process.env.PUBLIC_URL}/images/screenshot3.jpg`} alt="Screenshot 3" />
      </div>

      <div className="xkcd-paragraph">
        <p>
          XKCD Passphrase Generator is an alpha Android app that I wrote in the Angular and Ionic frameworks. The idea comes from the XKCD comic about passwords and passphrases. It generates random passphrases for you based on settings that you select such as overall length, and what numbers and symbols you would like it to use. You can also provide your own wordlist if you would like to change from the default wordlist. The app is currently an alpha version and while the basics work, it may have bugs, long load times, and missing features or graphics. You can download the APK below to install it on your Android phone and try it out!
        </p>
      </div>

      <a href={`${process.env.PUBLIC_URL}/files/passphrase-generator-beta.apk`} download><img src={`${process.env.PUBLIC_URL}/images/download-apk.png`} alt="download apk button" className="download-apk" /></a>
      <hr></hr>
      <h2>Next project coming soon!</h2>
      <p>An Android dungeon-crawler mini-rpg game!</p>
      <hr></hr>
    </div>
  );
};

export default Projects;