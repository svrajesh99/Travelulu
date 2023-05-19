import React from "react";
import './reviewslider.css';
import Slider from "react-slick";
import ".././Styles-sliders/slick-theme.css";
import avathar1 from "../../Assests/Images/Homepage/Avatar1.png";
import avathar2 from "../../Assests/Images/Homepage/Avatar2.png";
import avathar3 from "../../Assests/Images/Homepage/Avatar3.png";
const reviewslider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:1 ,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
    <div className="reviewswrapper">
      <Slider {...settings}>
        <div className="Avathar1">
          <div className="avatar1">
            <img src={avathar1}></img>
          </div>
          <div id="heading1">
            <b>Joe Blo Visited:</b> France
          </div>
          <div id="detailes1">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque pulvinar lorem justo, id faucibus mi.”
          </div>
        </div>
        <div className="Avathar1">
          <div className="avatar1">
            <img src={avathar2}></img>
          </div>
          <div id="heading1">
            <b>Joe Blo Visited:</b> France
          </div>
          <div id="detailes1">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque pulvinar lorem justo, id faucibus mi.”
          </div>
        </div>
        <div className="Avathar1">
          <div className="avatar1">
            <img src={avathar3}></img>
          </div>
          <div id="heading1">
            <b>Joe Blo Visited:</b> France
          </div>
          <div id="detailes1">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque pulvinar lorem justo, id faucibus mi.”
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default reviewslider;
