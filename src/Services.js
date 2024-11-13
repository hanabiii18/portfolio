import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './style/styles.css';

function Services() {
  useEffect(() => {
    const scrollRevealOption = {
      distance: '50px',
      origin: 'bottom',
      duration: 1000,
      interval: 500,
    };

    // Service card animations
    ScrollReveal().reveal('.service__card', { ...scrollRevealOption });
  }, []);

  return (
    <section className="section__container service__container" id="service">
      <h2 className="section__header">My Skills</h2>
      <div className="service__grid">
        <div className="service__card">
          <span><img src="/icons/java.png" alt="Website Design Icon" /></span>
          <h4>Java</h4>
          <p>
            INTERMEDIATE
          </p>
        </div>
        <div className="service__card">
          <span><img src="/icons/html.png" alt="E-commerce Solutions Icon" /></span>
          <h4>HTML</h4>
          <p>
            INTERMEDIATE
          </p>
        </div>
        <div className="service__card">
          <span><img src="/icons/php.png" alt="Mobile Development Icon" /></span>
          <h4>PHP</h4>
          <p>
            INTERMEDIATE
          </p>
        </div>
        <div className="service__card">
          <span><img src="/icons/python.png" alt="Content Marketing Icon" /></span>
          <h4>Python</h4>
          <p>
            BEGINNER
          </p>
        </div>
        <div className="service__card">
          <span><img src="/icons/bootstrap.png" alt="SEO Icon" /></span>
          <h4>Bootstrap</h4>
          <p>
            INTERMEDIATE
          </p>
        </div>
        <div className="service__card">
          <span><img src="/icons/mysql.png" alt="Digital Marketing Icon" /></span>
          <h4>MySQL</h4>
          <p>
            INTERMEDIATE
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
