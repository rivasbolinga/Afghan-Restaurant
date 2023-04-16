import React from 'react';
import PropTypes from 'prop-types';
import bannerImage from '../../assets/banner/banner.jpg';
import '../../styles/banner.scss';

const Banner = ({ title, description }) => (
  <section className="banner">
    <img src={bannerImage} alt="banner" />
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
