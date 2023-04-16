import '../styles/footer.scss';
import { Link } from 'react-router-dom';
import Map from './banner/Map';

const Footer = () => (
  <footer>
    <div className="gg-shape-zigzag" />
    <div className="footer-container">
      <div className="footer-item footer-dinner">
        <h3 className="footer-title">Dinner Restaurant</h3>
        <p className="footer-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel neque,
          odio illum. Est minima sint minus sunt ducimus.
        </p>
      </div>
      <div className="footer-item footer-time">
        <h3 className="footer-title">Horaires</h3>
        <p className="footer-text">from 12:00pm - 18:30pm</p>
      </div>
      <div className="footer-item footer-links">
        <h3 className="footer-title">Liens directs</h3>
        <ul className="footer-links">
          <li>
            <Link to="/">
              {' '}
              <span className="span-bullet">&bull;</span>
              {' '}
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/about">
              <span className="span-bullet">&bull;</span>
              {' '}
              À propos de nous
            </Link>
          </li>
          <li>
            <Link to="/menu">
              <span className="span-bullet">&bull;</span>
              {' '}
              Notre menu
            </Link>
          </li>
          <li>
            <Link to="/contact">
              {' '}
              <span className="span-bullet">&bull;</span>
              {' '}
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-item footer-location">
        <h3 className="footer-title">Addresse</h3>
        <p className="footer-text">14 rue de L&apos;épinguy 74300 Cluses</p>
        <div className="map-container">
          <Map />
        </div>
      </div>
      <div className="footer-item footer-contact">
        <h3 className="footer-title">Contact</h3>
        <p className="footer-text email-footer">shinwari.umar99@gmail.com</p>
        <p className="footer-text phone-footer">0656768519</p>
      </div>
    </div>
    <div className="copyright-container">
      Afghan food Copyright ©2023 All rights reserved
      {' '}
      <div>
        Design by
        {' '}
        <a
          href="https://www.linkedin.com/in/andrearivaspalacios/"
          target="_blank"
          rel="noreferrer"
        >
          Andrea
        </a>
        {' '}
        and
        {' '}
        <a
          href="https://www.linkedin.com/in/adarsh-pathak-powerlevel/"
          target="_blank"
          rel="noreferrer"
        >
          Adarsh
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
