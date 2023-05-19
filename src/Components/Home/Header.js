import React, { useState } from "react";
import "./Header.css";
const Header = () => {
  const [service, setService] = useState(false);
  const [continent, setContinent] = useState(false);
  const Hovermenu = () => {
    let element = document.getElementById("menu-detailes");
    element.style.width = "30vw";
  };
  const Cancelmenu = () => {
    let element = document.getElementById("menu-detailes");
    element.style.width = "0vw";
    element.classList.remove("Hover");
  };
  const Servicemenuopen = () => {
    setService(true);
  };
  const Servicemenuclose = () => {
    setService(false);
  };
  const continentmenuopen = () => {
    setContinent(true);
  };
  const continentmenuclose = () => {
    setContinent(false);
  };
  return (
    <div className="Header">
      <h1>Travelulu</h1>
      <i className="fa-solid fa-bars" id="Menu" onClick={Hovermenu}></i>
      <div className="menu-detailes" id="menu-detailes">
        <div className="inner-menu">
          <h2>Travelulu</h2>
          <i
            className="fa-sharp fa-solid fa-xmark"
            id="Menu"
            onClick={Cancelmenu}
          ></i>
        </div>
        <div className="outermenu">
          <div>Home</div>
          <div
            className="Services"
            onMouseOver={Servicemenuopen}
            onMouseLeave={Servicemenuclose}
          >
            <span id="service">
              {!service ? (
                <i className="fa-solid fa-greater-than" id="dropdown"></i>
              ) : (
                <i class="fa-sharp fa-solid fa-chevron-down" id="dropdown"></i>
              )}
              Services
            </span>
            <div className="servies-options">
              <p>Planning</p>
              <p>Financing</p>
              <p>Purchasing</p>
              <p>Reviewing</p>
              <p>Flying</p>
            </div>
          </div>

          <div
            className="Continents"
            onMouseOver={continentmenuopen}
            onMouseLeave={continentmenuclose}
          >
            <span id="continent">
              {!continent ? (
                <i className="fa-solid fa-greater-than" id="dropdown"></i>
              ) : (
                <i class="fa-sharp fa-solid fa-chevron-down" id="dropdown"></i>
              )}
              Continents
            </span>
            <div className="continent-options">
              <p>Africa</p>
              <p>Asia</p>
              <p>Antarctica</p>
              <p>Australia</p>
              <p>Europe</p>
              <p>North America</p>
              <p>South America</p>
            </div>
          </div>

          <div>Contact</div>
          <div>Privacy</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
