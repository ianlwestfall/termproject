import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
      <hr />
      <div className="about-container">
        <div className="about-left">
          <h1>Hey there!</h1>
          <h2>That's the real me over there, but I look pretty cool as a cartoon.</h2>
          <p>Thanks for taking an interest in me and my site! Here's a little more about myself:</p>
          <p>I started out in the automotive industry before going back to school for IT. After graduating I worked in K-12 IT for a number of years. Now I've taken some time off to complete a Master's in Software Development from Boston University and I'm only a few months away from being done!</p>
          <p>When I'm not at my computer I enjoy reading fiction and philosophy books. My go to for movies, tv, and games tends to be sci-fi and fantasy.</p>
          <p>I'll very soon be looking for a software development job, so if you have an opportunity you would like to discuss with me head over to my contact page and send me a message.</p>
        </div>
        <div className="about-right">
          <img src={`${process.env.PUBLIC_URL}/images/me.jpg`} alt="Me" />
        </div>
      </div>
      <hr />
      <div className="section-container">
        <div className="section-left">
          <img src={`${process.env.PUBLIC_URL}/images/three-body-problem.jpg`} alt="3 Body Problem TV show poster" />
        </div>
        <div className="section-right">
          <h1>What's holding my interest right now:</h1>
          <h2>3 Body Problem, the TV series on Netflix, but more so the books by Cixin Liu</h2>
          <p>"A fateful decision made in 1960s China reverberates in the present, where a group of scientists partner with a detective to confront an existential planetary threat."</p>
          <p>The TV show was interesting as a new sci-fi show with what looked like high production values. The beginning started out especially strong and had me hooked. I really enjoyed the real-world and speculative science that Cixin Liu puts in. Some stuff I thought got a little silly or non-sensical towards the middle and end but I still finished watching it.</p>
          <p>The real delight is in the books, as so often is the case I find a show that turns me on to the books, which are excellent. Warning: they can be dense, with scientific expositions. The fact that they are originally written in Chinese and then translated to English means the writing style can be a little different than you're use to, but I'm on 2 of 3 and enjoying them immensely.</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default About;