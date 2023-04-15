import React, { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/icons/logo.png';
import '../styles/navigation.scss';

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(!isOpen);
  };

  return (
    <nav className="navigation-bar">
      <div className="navigation-container">
        <Link to="/">
          <img className="logo-navbar" alt="logo" src={Logo} />
        </Link>
        <Hamburger
          style={{ backgroundColor: isOpen ? '#fff' : 'transparent' }}
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>
      <div
        role="button"
        tabIndex="0"
        onClick={handleMenuClick}
        onKeyDown={handleMenuClick}
        className={`mobile-menu ${isOpen ? 'open' : ''}`}
      >
        <ul className="menu">
          <li className="nav-item" aria-label="Accueil">
            <Link to="/" onClick={handleMenuClick} onKeyDown={handleMenuClick}>
              Accueil
            </Link>
          </li>
          <li className="nav-item" aria-label="À propos de nous">
            <Link
              to="/about"
              onClick={handleMenuClick}
              onKeyDown={handleMenuClick}
            >
              À propos de nous
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/menu"
              onClick={handleMenuClick}
              onKeyDown={handleMenuClick}
            >
              Notre menu
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              onClick={handleMenuClick}
              onKeyDown={handleMenuClick}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
