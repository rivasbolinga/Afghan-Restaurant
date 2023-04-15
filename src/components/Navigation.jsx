import React, { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/icons/logo.png';

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
      <div className='mobile-menu'>
        
      </div>
    )}
  </nav>
)
}
export default Navigation;
