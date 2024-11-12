import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style/styles.css';

function Portfolio() {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: '20px',
    autoplay: true,              
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '10px',
        },
      },
    ],
  };

  return (
    <section className="section__container portfolio__container" id="portfolio">
      <h2 className="section__header">My Portfolio</h2>
      <p className="section__description">
        Explore a showcase of my diverse projects, demonstrating my skills in web development, design, and beyond.
      </p>
      <div className="portfolio__carousel">
        <Slider {...settings}>
          <div className="portfolio__card">
            <div className="portfolio__card__content">
              <h3>SmartCatch</h3>
              <p>This is collaborative project, developed with PHP and ReactJS. It uses the laravel framework. It is a system with the purpose of identifying fish species through image scanning.</p>
            </div>
            <img src="/projects/project-1.png" alt="portfolio" />
          </div>
          <div className="portfolio__card">
            <div className="portfolio__card__content">
              <h3>CafeConnect</h3>
              <p>A seld ordering system for coffee shops. It was developed using Java.</p>
            </div>
            <img src="/project-2.png" alt="portfolio" />
          </div>
          <div className="portfolio__card">
            <div className="portfolio__card__content">
              <h3>Website</h3>
              <p>First HTML project to developed.</p>
            </div>
            <img src="/project-3.png" alt="portfolio" />
          </div>
          <div className="portfolio__card">
            <div className="portfolio__card__content">
              <h3>Gym Management System</h3>
              <p>A management system for gyms. Developed using vanilla PHP.</p>
            </div>
            <img src="/project-4.jpg" alt="portfolio" />
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Portfolio;
