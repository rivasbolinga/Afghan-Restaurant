import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import bannerImageDesk from '../../assets/banner/banner-desktop.jpg';
import bannerImageMob from '../../assets/banner/banner-mobile.jpg';
import bannerImageTab from '../../assets/banner/banner-tablet.jpg';
import '../../styles/banner.scss';

const Banner = ({ title, description }) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let bannerImageSrc;

  if (width > 768) {
    bannerImageSrc = bannerImageDesk;
  } else if (width < 425) {
    bannerImageSrc = bannerImageMob;
  } else {
    bannerImageSrc = bannerImageTab;
  }

  return (
    <section className="banner">
      <img
        src={
        bannerImageSrc
      }
        alt="banner"
      />
      <div className="banner-content">
        <h1>{title}</h1>
        {/*  */}
        <p>
          {description}
        </p>
        <button type="button">our menu</button>
      </div>
    </section>
  );
};
Banner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Banner;

//  i will use this in future
// const [scrollPosition, setScrollPosition] = useState(0);

// const handleScroll = () => {
//   const position = window.pageYOffset;
//   setScrollPosition(position);
// };

// useEffect(() => {
//   window.addEventListener('scroll', handleScroll, { passive: true });
//   return () => {
//     window.removeEventListener('scroll', handleScroll);
//   };
// }, []);

// const parallaxStyle = {
//   transform: `translateY(-${scrollPosition * 0.3}px)`,
//   backgroundImage: `url(${bannerImage})`,
// };
