import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';
import '../styles/testimonials.scss';
import Umar from '../assets/images/Umar.png';

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <MagicSliderDots dots={dots} numDotsToShow={3} dotWidth={30} />
    ),
  };

  return (
    <div className="slider-container">
      <Slider
        className="slider"
        dots={settings.dots}
        arrows={settings.arrows}
        infinite={settings.infinite}
        speed={settings.speed}
        slidesToShow={settings.slidesToShow}
        slidesToScroll={settings.slidesToScroll}
        appendDots={settings.appendDots}
      >
        <div className="testimonial-container">
          <h3 className="testimonial-text">
            &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aliquid ad rerum odio doloribus minima inventore atque, eveniet
            placeat ipsum. Eius harum ratione, fugiat iste officia praesentium
            non similique sed magni?&quot;
          </h3>
          <div className="testimonial-info">
            <img className="testimonial-image" alt="testimonial" src={Umar} />
            <h4 className="testimonial-name">UMAR SHINWARI</h4>
            <p className="testimonial-position">CEO, Founder</p>
          </div>
        </div>
        <div className="testimonial-container">
          <h3 className="testimonial-text">
            &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aliquid ad rerum odio doloribus minima inventore atque, eveniet
            placeat ipsum. Eius harum ratione, fugiat iste officia praesentium
            non similique sed magni?&quot;
          </h3>
          <div className="testimonial-info">
            <img className="testimonial-image" alt="testimonial" src={Umar} />
            <h4 className="testimonial-name">UMAR SHINWARI</h4>
            <p className="testimonial-position">CEO, Founder</p>
          </div>
        </div>
        <div className="testimonial-container">
          <h3 className="testimonial-text">
            &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aliquid ad rerum odio doloribus minima inventore atque, eveniet
            placeat ipsum. Eius harum ratione, fugiat iste officia praesentium
            non similique sed magni?&quot;
          </h3>
          <div className="testimonial-info">
            <img className="testimonial-image" alt="testimonial" src={Umar} />
            <h4 className="testimonial-name">UMAR SHINWARI</h4>
            <p className="testimonial-position">CEO, Founder</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonials;
