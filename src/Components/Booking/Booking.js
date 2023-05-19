import React, { useState } from "react";
import "./Booking.css";
import property1 from "../../Assests/Images/Booking/property1.png";
import property2 from "../../Assests/Images/Booking/property2.png";
import property3 from "../../Assests/Images/Booking/property3.png";
import property4 from "../../Assests/Images/Booking/property4.png";
import Propertiesslider from "./Propertiesslider";
import Footer from "../Footer/Footer";
const BookingPage = () => {
  const [expand, setExpand] = useState(false);
  const expandproperties = () => {
    const property = document.getElementById("properties-2");
    property.classList.add("properties-2-active");
    property.classList.remove("properties-2");
    setExpand(true);
  };
  const collapseproperties = () => {
    const property = document.getElementById("properties-2");
    property.classList.remove("properties-2-active");
    property.classList.add("properties-2");
    setExpand(false);
  };
  return (
    <div className="booking">
      <h1>Find deals on hotels, homes and much more...</h1>
      <div className="options">
        <div className="option1">
          <p>Where are you going?</p>
          <p>
            <i class="fa-solid fa-greater-than" id="icon-bt"></i>
          </p>
        </div>
        <div className="options2">
          <div>
            Check-in - Check-out{" "}
            <i class="fa-solid fa-greater-than" id="icon-bt"></i>
          </div>
          <div>
            2 adults - 0 children{" "}
            <i class="fa-solid fa-greater-than" id="icon-bt"></i>
          </div>
          <button>search</button>
        </div>
      </div>
      <div className="properties">
        <div className="properties-1">
          <h1 id="heading-1">search</h1>
          <div>
            <p>Destination/property name</p>
            <div id="search">
              <i class="fa-solid fa-magnifying-glass"></i>
              <span>Gold Coast</span>
              <i class="fa-solid fa-angle-down"></i>
            </div>
          </div>
          <div>
            <p>Check-in date</p>
            <div id="check-in">
              <i class="fa-solid fa-calendar-days"></i>
              <span>Check-in date</span>
              <i class="fa-solid fa-angle-down"></i>
            </div>
          </div>
          <div>
            <p>Check-out date</p>
            <div id="check-in">
              <i class="fa-solid fa-calendar-days"></i>
              <span>Check-out date</span>
              <i class="fa-solid fa-angle-down"></i>
            </div>
          </div>
          <div>
            <p>Travellers</p>
            <div id="travelers">
              <i class="fa-solid fa-user"></i>
              <span>2 adults - 0 childern</span>
            </div>
          </div>
        </div>
        <div className="properties-2" id="properties-2">
          <h2>254 Properties Found</h2>
          <div className="property">
            <div>
              <img id="property-image" src={property1} alt="property"></img>
              <div id="slider">
                <Propertiesslider image={property1}></Propertiesslider>
              </div>
            </div>
            <div className="property-detailes">
              <div className="property-rating">
                <div id="rating">
                  <i class="fa-regular fa-star" id="star"></i>
                  <i class="fa-regular fa-star" id="star"></i>
                  <i class="fa-regular fa-star" id="star"></i>
                  <i class="fa-regular fa-star" id="star"></i>
                  <i class="fa-regular fa-star" id="star"></i>
                </div>
                <div>
                  <button id="button1">Make a Booking</button>
                </div>
              </div>
              <h4>Maldron Hotel</h4>
              <p>
                Newcastle Newcastle City Centre, Newcastle upon Tyne 0.3km from
                centre
              </p>
              <h4>
                <i class="fa-sharp fa-solid fa-location-dot"></i> Show on map
              </h4>
              <p>
                Situated in Newcastle City Centre, Maldron Hotel features free
                WiFi and a private court yard.
              </p>
            </div>
            <div id="button2">
              <button>Make a Booking</button>
            </div>
          </div>
          <hr></hr>
          <div className="property">
            <div>
              <img id="property-image" src={property2} alt="property"></img>
              <div id="slider">
                <Propertiesslider image={property2}></Propertiesslider>
              </div>{" "}
            </div>
            <div className="property-detailes">
              <div className="property-rating">
                <div id="rating">
                  <i class="fa-regular fa-star" id="star"></i>
                  <i class="fa-regular fa-star" id="star"></i>
                  <i class="fa-regular fa-star" id="star"></i>
                  <i class="fa-regular fa-star" id="star"></i>
                </div>
                <div>
                  <button id="button1">Make a Booking</button>
                </div>
              </div>
              <h4>Estate de la Newcastle</h4>
              <p>
                Newcastle Newcastle City Centre, Newcastle upon Tyne 0.3km from
                centre
              </p>
              <h4>
                <i class="fa-sharp fa-solid fa-location-dot"></i> Show on map
              </h4>
              <p>
                Situated in Newcastle City Centre, Maldron Hotel features free
                WiFi and a private court yard.
              </p>
            </div>
            <div id="button2">
              <button>Make a Booking</button>
            </div>
          </div>
          <hr></hr>
          <div className="property">
            <div>
              <img id="property-image" src={property3} alt="property"></img>
              <div id="slider">
                <Propertiesslider image={property3}></Propertiesslider>
              </div>
            </div>
            <div className="property-detailes">
              <div className="property-rating">
                <div id="rating">
                  <i class="fa-regular fa-star" id="star"></i>
                  <i class="fa-regular fa-star" id="star"></i>
                  <i class="fa-regular fa-star" id="star"></i>
                </div>
                <div>
                  <button id="button1">Make a Booking</button>
                </div>
              </div>
              <h4>Newcastle Premier Hotel </h4>
              <p>
                Newcastle Newcastle City Centre, Newcastle upon Tyne 0.3km from
                centre
              </p>
              <h4>
                <i class="fa-sharp fa-solid fa-location-dot"></i> Show on map
              </h4>
              <p>
                Situated in Newcastle City Centre, Maldron Hotel features free
                WiFi and a private court yard.
              </p>
            </div>
            <div id="button2">
              <button>Make a Booking</button>
            </div>
          </div>
          <hr></hr>
          <div className="property">
            <div>
              <img id="property-image" src={property4} alt="property"></img>
              <div id="slider">
                <Propertiesslider image={property4}></Propertiesslider>
              </div>
            </div>
            <div className="property-detailes">
              <div className="property-rating">
                <div id="rating">
                  <i class="fa-regular fa-star" id="star"></i>
                  <i class="fa-regular fa-star" id="star"></i>
                  <i class="fa-regular fa-star" id="star"></i>
                </div>
                <div>
                  <button id="button1">Make a Booking</button>
                </div>
              </div>
              <h4>AirBnB Residence</h4>
              <p>
                Newcastle Newcastle City Centre, Newcastle upon Tyne 0.3km from
                centre
              </p>
              <h4>
                <i class="fa-sharp fa-solid fa-location-dot"></i> Show on map
              </h4>
              <p>
                Situated in Newcastle City Centre, Maldron Hotel features free
                WiFi and a private court yard.
              </p>
            </div>
            <div id="button2">
              <button>Make a Booking</button>
            </div>
          </div>
        </div>
      </div>
      <div className="Dropdown">
        <hr></hr>
        <div className="dropdown">
          <i
            class="fa-solid fa-caret-down"
            style={expand ? { display: "none" } : { display: "block" }}
            onClick={expandproperties}
          ></i>
          <i
            class="fa-solid fa-caret-up"
            style={!expand ? { display: "none" } : { display: "block" }}
            onClick={collapseproperties}
          ></i>
        </div>
        <hr></hr>
      </div>
      <div className="like">
        <div>
          <span>
            <i class="fa-solid fa-thumbs-up"></i>
          </span>
          <p>
            Lock in a great price for your upcoming stay Get instant
            confirmation with FREE cancellation on most rooms!
          </p>
        </div>
        <span>
          <i class="fa-solid fa-xmark"></i>
        </span>
      </div>
      <div className="error">
        <div>
          <span>
            <i class="fa-solid fa-circle-exclamation"></i>
          </span>
          <p>
            From 6 April 2022,Lock in a great price for your upcoming stay Get
            instant confirmation with FREE cancellation on most rooms!
          </p>
        </div>
        <span>
          <i class="fa-solid fa-xmark"></i>
        </span>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BookingPage;
