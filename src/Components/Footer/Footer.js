import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="Main-footer">
      <div className="contact-us">
        <h1>Need more information to get started?</h1>
        <button>CONTACT US</button>
      </div>
      <div className="Footer">
        <div className="footer1">
          <div className="toollist">TRAVELULU</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            ullamcorper magna, ac laoreet ex. Integer a consequat lectus. Nullam
            tortor sem.
          </p>
          <p>
            <b>Copyright 2021, All Rights Reserved.</b>
          </p>
        </div>
        <div className="footer2">
          <div>
            <h4>Services</h4>
            <a href="">Planning</a>
            <a href="">Financing</a>
            <a href="">Purchasing</a>
            <a href="">Metting</a>
            <a href="">Flying</a>
          </div>
          <div>
            <h4>Continents</h4>
            <a href="">North America</a>
            <a href="">Soutn America</a>
            <a href="">Asia</a>
            <a href="">Africa</a>
            <a href="">Europe</a>
            <a href="">Australia</a>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="" id="email">
              travelulu@website.com
            </a>
            <p>
              22 Street Address,<br></br> Suburb Address Main City,<br></br> PO
              Box Country<br></br> 08 8888 88888
            </p>
          </div>
        </div>
      </div>
      <div className="Footer1">
        <div className="footer1">
          <div className="toollist">TRAVELULU</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            ullamcorper magna, ac laoreet ex. Integer a consequat lectus. Nullam
            tortor sem.
          </p>
          <p>
            <b>Copyright 2021, All Rights Reserved.</b>
          </p>
        </div>
        <div className="footer2">
          <h4>contact</h4>
          <a href="" id="email">
            travelulu@website.com
          </a>
          <p>
            22 Street Address,<br></br> Suburb Address Main City,<br></br> PO
            Box Country<br></br> 08 8888 88888
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
