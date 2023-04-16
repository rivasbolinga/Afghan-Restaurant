import React, { useState, useEffect } from 'react';
import bannerImage from '../../assets/banner/banner.jpg';
import '../../styles/banner.scss';

const Banner = ({title, description}) => {
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

  return (
    <section className="banner">
      <img src={bannerImage} alt="banner-image" />
      <div className="banner-content">
        <h1>{title}</h1>
        {/*  */}
        <p>
          {description}
        </p>
        <button>our menu</button>
      </div>
    </section>
  );
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

Banner.defaultProps = {  
  title : "Afgan Resturent",
  description : "we serve you well",
}  

export default Banner;
