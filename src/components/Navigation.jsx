import React, { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/icons/logo.png';
import '../styles/navigation.scss';

const Navigation = () => {
const [isOpen, setOpen] = useState(false);
return (
  <nav className="navigation-bar">
    <div className="navigation-container">
      <Link to="/">
        <img className="logo-navbar" alt="logo" src={Logo}></img>
      </Link>
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </div>
    {isOpen && (
      <div className="mobile-menu" onClick={() => setOpen(false)}>
        <Link to="/">
          <img className="logo-navbar" alt="logo" src={Logo}></img>
        </Link>
        <ul className="menu">
          <li className="nav-item" onClick={() => setOpen(false)}>
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item" onClick={() => setOpen(false)}>
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item" onClick={() => setOpen(false)}>
            <Link to="/menu">Our menu</Link>
          </li>
          <li className="nav-item" onClick={() => setOpen(false)}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    )}
  </nav>
)
}
export default Navigation;
