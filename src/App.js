import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import NavBar from './NavBar';
import Header from './Header';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import './style/styles.css';

function App() {
  useEffect(() => {
    const scrollRevealOption = {
      distance: '50px',
      origin: 'bottom',
      duration: 1000,
    };

    // Header container animations
    ScrollReveal().reveal('.header__content h1', { ...scrollRevealOption });
    ScrollReveal().reveal('.header__content .section__description', { ...scrollRevealOption, delay: 500 });
    ScrollReveal().reveal('.header__content .header__btn', { ...scrollRevealOption, delay: 1000 });

    // About container animations
    ScrollReveal().reveal('.about__content .section__header', { ...scrollRevealOption });
    ScrollReveal().reveal('.about__content .section__description', { ...scrollRevealOption, delay: 500 });
    ScrollReveal().reveal('.about__content .about__btn', { ...scrollRevealOption, delay: 1000 });

    // Service container animations
    ScrollReveal().reveal('.service__card', { ...scrollRevealOption, interval: 500 });

    // Portfolio container animations
    ScrollReveal().reveal('.portfolio__card', { duration: 1000, interval: 500 });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
