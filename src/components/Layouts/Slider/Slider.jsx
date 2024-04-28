import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel = ({ Slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    className: "w-[60%] overflow-hidden"
  };

  return (
    <Slider {...settings}>
      {Slides.map((slide, index) => (
        <div key={index}>
          <img className="w-full h-96 object-cover p-2 border-neon border-3" src={slide} alt={`slide-${index}`} />
        </div>
      ))}
    </Slider>
  );
};