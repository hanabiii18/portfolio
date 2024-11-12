import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './style/styles.css'; 

function About() {
  useEffect(() => {
    const scrollRevealOption = {
      distance: '50px',
      origin: 'bottom',
      duration: 1000,
    };

  
    ScrollReveal().reveal('.about__content .section__header', { ...scrollRevealOption });
    ScrollReveal().reveal('.about__content .section__description', { ...scrollRevealOption, delay: 500 });
    ScrollReveal().reveal('.about__content .about__btn', { ...scrollRevealOption, delay: 1000 });
  }, []);

  return (
    <section className="section__container about__container" id="about">
      <div className="about__image">
        <img src="/bg.png" alt="bg" className="about__bg-1" />
        <img src="/bg.png" alt="bg" className="about__bg-2" />
        <img src="/about.jpg" alt="about" className="about__img" />
      </div>
      <div className="about__content">
        <h2 className="section__header">Bit About Me</h2>
        <p className="section__description">
          A passionate web developer with a creative flair and a knack for
          turning visions into reality. My journey in web development began with
          a fascination for coding and design, and it has evolved into a career
          where I blend aesthetics with functionality. With a focus on user
          experience and a commitment to staying updated with the latest
          industry trends, I'm dedicated to creating web solutions that not only
          meet but exceed expectations.
        </p>
        <div className="about__btn">
          <a href="/Resume.pdf" download>
            <button className="btn">Download CV</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
