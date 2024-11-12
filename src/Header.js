import React from 'react';
import './style/styles.css';

function Header() {
  return (
    <header className="section__container header__container" id="home">
      <div className="header__image">
        <img src="/header.png" alt="header" />
      </div>
      <div className="header__content">
        <div>
          <h2>Hello! I'm Crisha Ann Dandoy</h2>
        </div>
        <div>
          <h1>Front End<br />Developer</h1>
        </div>
        <p className="section__description">
          I’m a Computer Science student at Cavite State University Bacoor, focused on web development and software engineering. I enjoy creating websites and software that are both functional and easy to use. With strong skills in programming, problem-solving, and design, I aim to deliver clean and efficient solutions. Check out my work and feel free to reach out if you’d like to collaborate!
        </p>
      </div>
    </header>
  );
}

export default Header;
