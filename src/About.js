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
        <h2 className="section__header">About Me</h2>
        <p className="section__description">
          A developer based in Bacoor, Cavite, with a growing skill set in PHP, Java, HTML, CSS, and JavaScript. Passionate about building functional and visually appealing websites and web applications, I have hands-on experience in both front-end and back-end development.
          I’m excited to apply what I’ve learned to real-world projects and always seek new challenges to refine my skills. Outside of coding, I enjoy gaming, baking, dancing, watching anime, and reading novels, which inspire my creative approach to development.
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
