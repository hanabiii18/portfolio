import React from 'react';
import './style/styles.css';

function Portfolio() {
  return (
    <section className="section__container portfolio__container" id="portfolio">
      <h2 className="section__header">My Portfolio</h2>
      <p className="section__description">
        Explore a showcase of my diverse projects, demonstrating my skills in web development, design, and beyond.
      </p>
      <div className="portfolio__grid">
        <div className="portfolio__card">
          <div className="portfolio__card__content">
            <h3>SmartCatch</h3>
            <p>
              A fish species identification system developed using PHP with Laravel Framework and ReactJS.
            </p>
          </div>
          <img src="/projects/project-1.png" alt="SmartCatch" />
        </div>
        <div className="portfolio__card">
          <div className="portfolio__card__content">
            <h3>CafeConnect</h3>
            <p>
              A self-ordering system for coffee shops, developed using Java and MySQL.
            </p>
          </div>
          <img src="/project-2.png" alt="CafeConnect" />
        </div>
        <div className="portfolio__card">
          <div className="portfolio__card__content">
            <h3>Gym Management System</h3>
            <p>
              A management system for gyms, developed using PHP vanilla and MySQL.
            </p>
          </div>
          <img src="/project-4.jpg" alt="Gym Management System" />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
