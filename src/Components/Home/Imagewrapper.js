import React, { useState } from "react";
import "./Imagewrapper.css";
import Slider from "react-slick";
import ".././Styles-sliders/slick-theme.css";
import hotel from "../../Assests/Images/Imageslider/hotel.png";
import hotel1 from "../../Assests/Images/Imageslider/hotel1.jpg";
import caves from "../../Assests/Images/Imageslider/caves.jpeg";
import images from "../../Assests/Images/Imageslider/images.jpg";
import resort from "../../Assests/Images/Imageslider/resort.png";
import resort2 from "../../Assests/Images/Imageslider/resort2.jpg";
const Imagewrapper = () => {
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
          slidesToShow: 2,
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
          <img src={resort}></img>
        </div>
        <div className="cell">
          <img src={hotel}></img>
        </div>
        <div className="cell">
          <img src={hotel1}></img>
        </div>
        <div className="cell">
          <img src={resort2}></img>
        </div>
        <div className="cell">
          <img src={caves}></img>
        </div>
        <div className="cell">
          <img src={images}></img>
        </div>
      </Slider>
    </div>
  );
};

export default Imagewrapper;
