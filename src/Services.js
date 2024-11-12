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
      <h2 className="section__header">My Best Services</h2>
      <div className="service__grid">
        <div className="service__card">
          <span><img src="/icons/java.png" alt="Website Design Icon" /></span>
          <h4>Website Design</h4>
          <p>
            We craft user-friendly interfaces that engage visitors and help you
            achieve your online goals with minimum efforts.
          </p>
        </div>
        <div className="service__card">
          <span><img src="/icons/html.png" alt="E-commerce Solutions Icon" /></span>
          <h4>E-commerce Solutions</h4>
          <p>
            We build secure, scalable, and user-centric online stores that
            enhance the shopping experience and drive conversions.
          </p>
        </div>
        <div className="service__card">
          <span><img src="/icons/php.png" alt="Mobile Development Icon" /></span>
          <h4>Mobile Development</h4>
          <p>
            From iOS to Android, we create apps that deliver seamless
            performance and keep users coming back for more.
          </p>
        </div>
        <div className="service__card">
          <span><img src="/icons/python.png" alt="Content Marketing Icon" /></span>
          <h4>Content Marketing</h4>
          <p>
            Our services include creating blog posts, videos, and social media
            content that drives traffic and engagement.
          </p>
        </div>
        <div className="service__card">
          <span><img src="/icons/bootstrap.png" alt="SEO Icon" /></span>
          <h4>SEO</h4>
          <p>
            Our SEO strategies are tailored to your specific goals, helping you
            reach your target audience and grow your online presence.
          </p>
        </div>
        <div className="service__card">
          <span><img src="/icons/mysql.png" alt="Digital Marketing Icon" /></span>
          <h4>Digital Marketing</h4>
          <p>
            From pay-per-click (PPC) advertising to social media marketing, we
            ensure your brand stands out in the crowded digital landscape.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
