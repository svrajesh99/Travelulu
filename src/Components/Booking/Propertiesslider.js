import React from "react";
import './Propertiesslider.css'
import Slider from "react-slick";
import ".././Styles-sliders/slick-theme.css";
import image from "../../Assests/Images/Booking/property4.png";

const Propertiesslider = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="wrapper">
      <Slider {...settings}>
        <div className="cell">
          <img src={props.image}></img>
        </div>
        <div className="cell">
          <img src={props.image}></img>
        </div>
        <div className="cell">
          <img src={props.image}></img>
        </div>
      </Slider>
    </div>
  );
};

export default Propertiesslider;
