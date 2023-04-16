import React, { useState, useEffect } from 'react';
import bannerImage from '../../assets/banner/banner.jpg';
import '../../styles/banner.scss';

const Banner = () => {
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
        <h1>console.log() lol</h1>
        {/*  */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a pariatur asperiores optio libero officiis repudiandae amet aspernatur, omnis 
        </p>
        <button>our menu</button>
      </div>
    </section>
  );
};

export default Banner;
