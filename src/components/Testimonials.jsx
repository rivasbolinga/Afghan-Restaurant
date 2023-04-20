import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
  <div className="testimonial" key="testimonial-1">
    <h3>Testimonial 1</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, quam
      ut rutrum venenatis, augue nunc bibendum enim, ut bibendum dolor arcu eget
      mauris.
    </p>
  </div>,
  <div className="testimonial" key="testimonial-2">
    <h3>Testimonial 2</h3>
    <p>
      Nullam euismod mauris et ligula imperdiet sagittis. Duis bibendum elit a
      sem fringilla, at bibendum sapien volutpat. Sed consectetur ullamcorper
      nunc quis varius.
    </p>
  </div>,
  <div className="testimonial" key="testimonial-3">
    <h3>Testimonial 3</h3>
    <p>
      Quisque euismod urna vel dapibus commodo. Suspendisse vel erat nunc. Fusce
      ultricies tortor vel lectus semper posuere.
    </p>
  </div>,
];

const Testimonials = () => <AliceCarousel className="car" key={items} mouseTracking items={items} />;

export default Testimonials;
