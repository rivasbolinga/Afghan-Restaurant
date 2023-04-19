import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';

class Testimonials extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: (dots) => {
        return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />
      },
    }

    return (
      <Slider className='slider' {...settings}>
        <div>
          <h3>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ad
            rerum odio doloribus minima inventore atque, eveniet placeat ipsum.
            Eius harum ratione, fugiat iste officia praesentium non similique
            sed magni?"
          </h3>
        </div>
        <div>
          <h3>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ad
            rerum odio doloribus minima inventore atque, eveniet placeat ipsum.
            Eius harum ratione, fugiat iste officia praesentium non similique
            sed magni?"
          </h3>
        </div>
        <div>
          <h3>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ad rerum odio doloribus minima inventore atque, eveniet placeat ipsum. Eius harum ratione, fugiat iste officia praesentium non similique sed magni?"</h3>
        </div>
      </Slider>
    )
  }
}

export default Testimonials;