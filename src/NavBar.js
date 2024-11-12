import React, { useState } from 'react';
import './style/styles.css';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="nav">
      <div className="nav__bar">
        <a href="#"><span className="logo nav__logo">C</span> Crisha</a>
        <div className="nav__menu__btn" id="menu-btn" onClick={toggleMenu}>
          <i className={menuOpen ? "ri-close-line" : "ri-menu-3-line"}></i>
        </div>
      </div>
      <ul className={`nav__links ${menuOpen ? 'open' : ''}`} id="nav-links" onClick={closeMenu}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact" className="btn">Contact</a></li>
      </ul>
      <a href="#contact" className="btn btn__large">Contact</a>
    </nav>
  );
}

export default NavBar;
