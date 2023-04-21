import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Umar from '../assets/images/Umar.png';
import '../styles/testimonials.scss';

const items = [
  <div className="testimonial-container" key="testimonial-1">
    <img className="testimonial-image" alt="testimonial" src={Umar} />
    <h3 className="testimonial-text">
      &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ad
      rerum odio doloribus minima inventore atque, eveniet placeat ipsum. Eius
      harum ratione, fugiat iste officia praesentium non similique sed
      magni?&quot;
    </h3>
    <div className="testimonial-info">
      <h4 className="testimonial-name">UMAR SHINWARI</h4>
      <p className="testimonial-position">CEO, Founder</p>
    </div>
  </div>,
  <div className="testimonial-container" key="testimonial-2">
    <img className="testimonial-image" alt="testimonial" src={Umar} />
    <h3 className="testimonial-text">
      &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ad
      rerum odio doloribus minima inventore atque, eveniet placeat ipsum. Eius
      harum ratione, fugiat iste officia praesentium non similique sed
      magni?&quot;
    </h3>
    <div className="testimonial-info">
      <h4 className="testimonial-name">UMAR SHINWARI</h4>
      <p className="testimonial-position">CEO, Founder</p>
    </div>
  </div>,
  <div className="testimonial-container" key="testimonial-3">
    <img className="testimonial-image" alt="testimonial" src={Umar} />
    <h3 className="testimonial-text">
      &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ad
      rerum odio doloribus minima inventore atque, eveniet placeat ipsum. Eius
      harum ratione, fugiat iste officia praesentium non similique sed
      magni?&quot;
    </h3>
    <div className="testimonial-info">
      <h4 className="testimonial-name">UMAR SHINWARI</h4>
      <p className="testimonial-position">CEO, Founder</p>
    </div>
  </div>,
];

const Testimonials = () => (
  <section className="testimonials-section">
    <AliceCarousel
      disableButtonsControls
      key={items}
      mouseTracking
      items={items}
    />
  </section>
);

export default Testimonials;
