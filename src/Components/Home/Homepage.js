import React from "react";
import "./Homepage.css";
import Imagewrapper from "../../Components/Home/Imagewrapper";
import Reviewslider from "../../Components/Home/reviewslider";
import { MdFlight } from "react-icons/md";
import { IoMdGlobe, IoMdBicycle } from "react-icons/io";
import boarding from "../../Assests/Images/Homepage/boarding.png";
import time from "../../Assests/Images/Homepage/time.png";
import money from "../../Assests/Images/Homepage/money.png";
import finance from "../../Assests/Images/Homepage/finance.png";
import airhelp from "../../Assests/Images/Homepage/airhelp.png";
import avathar1 from "../../Assests/Images/Homepage/Avatar1.png";
import avathar2 from "../../Assests/Images/Homepage/Avatar2.png";
import avathar3 from "../../Assests/Images/Homepage/Avatar3.png";
import Footer from "../Footer/Footer";
const Homepage = () => {
  return (
    <div className="homepage">
      <div className="boarding">
        <div className="Boarding-img1">
          <img src={boarding} alt="boarding"></img>
        </div>
        <div className="Boarding-detailes">
          <div>
            <h1>Plan your next big trip overseas.</h1>
          </div>
          <div className="Boarding-buttons">
            <button id="begin-bt">BEGIN PLANS</button>
            <button id="review-bt">REVIEW PLANS</button>
          </div>
        </div>
        <div className="Boarding-img">
          <img src={boarding} alt="boarding"></img>
        </div>
      </div>
      <div className="statics">
        <div>
          <h1>
            <MdFlight></MdFlight>23,973
          </h1>
          <p>
            Travel to over 23 thousand<br></br> locations around the world.
          </p>
        </div>
        <div>
          <h1>
            <IoMdGlobe></IoMdGlobe>82,000
          </h1>
          <p>
            Read tens of thousands of<br></br> reviews of destinations.{" "}
          </p>
        </div>
        <div>
          <h1>
            <IoMdBicycle></IoMdBicycle>4,000,000
          </h1>
          <p>
            Visited by millions of<br></br> travellers every single day.{" "}
          </p>
        </div>
      </div>
      <div className="Tools-list">
        <div className="toollist">TOOL LIST</div>
        <div className="tools">
          <div id="tool1">Use our assortment of travel plan tools</div>
          <div id="tool2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque pulvinar lorem justoLorem ipsum dolor sit amet,
            consectetur{" "}
          </div>
        </div>
      </div>
      <div className="travel-tips">
        <div>
          <img src={time} alt="time"></img>
          <h3>Plan Trip Dates</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          <button>LEARN MORE</button>
        </div>
        <div>
          <img src={money} alt="money"></img>
          <h3>Pay For Your Flights</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          <button>LEARN MORE</button>
        </div>
        <div>
          <img src={finance} alt="finance"></img>
          <h3>Plan Your Finances</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          <button>LEARN MORE</button>
        </div>
      </div>
      <div className="Tools-list">
        <div className="toollist">PHOTO GALLERRY</div>
        <div className="tools">
          <div id="tool1">View the wonderful places you can visit</div>
          <div id="tool2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque pulvinar lorem justoLorem ipsum dolor sit amet,
            consectetur{" "}
          </div>
        </div>
      </div>
      <div id="image-wrapper">
        <Imagewrapper></Imagewrapper>
      </div>
      <div className="planning">
        <div id="planning">PLANNING AHEAD</div>
        <div id="planning-detailes">
          Let’s review Your checklist of everything
        </div>
      </div>
      <div className="contact">
        <div className="airhelp">
          <img src={airhelp}></img>
        </div>
        <div className="contact-1">
          <div className="div1">
            <p>Lorem ipsum dolor sit amet, consectetur ds.</p>
            <button>
              <i class="fa-solid fa-greater-than"></i>
            </button>
          </div>
          <div className="div2">
            <p>Lorem ipsum dolor sit amet, consectetur ds.</p>
            <button>
              <i class="fa-solid fa-greater-than"></i>
            </button>
          </div>
          <div className="div3">
            <p>Lorem ipsum dolor sit amet, consectetur ds.</p>
            <button>
              <i class="fa-solid fa-greater-than"></i>
            </button>
          </div>
        </div>
        <div className="contact-2">
          <div className="div1">
            <button>
              <i class="fa-solid fa-greater-than"></i>
            </button>
            <p>Lorem ipsum dolor sit amet, consectetur ds.</p>
          </div>
          <div className="div2">
            <button>
              <i class="fa-solid fa-greater-than"></i>
            </button>
            <p>Lorem ipsum dolor sit amet, consectetur ds.</p>
          </div>
          <div className="div3">
            <button>
              <i class="fa-solid fa-greater-than"></i>
            </button>
            <p>Lorem ipsum dolor sit amet, consectetur ds.</p>
          </div>
        </div>
        <div className="contact-21">
          <div className="div1">
            <button>
              <i class="fa-solid fa-greater-than"></i>
            </button>
            <p>Lorem ipsum dolor sit amet, consectetur ds.</p>
          </div>
          <div className="div2">
            <button>
              <i class="fa-solid fa-greater-than"></i>
            </button>
            <p>Lorem ipsum dolor sit amet, consectetur ds.</p>
          </div>
          <div className="div3">
            <button>
              <i class="fa-solid fa-greater-than"></i>
            </button>
            <p>Lorem ipsum dolor sit amet, consectetur ds.</p>
          </div>
        </div>
      </div>
      <div className="testnomial">
        <div className="toollist">TESTIMONIALS</div>
        <div>
          <div className="testnomial-detailes">
            <p>Let’s see what fans of Travelulu have to say</p>
            <div id="testnomial-bt">
              <button>
                <i class="fa-solid fa-less-than"></i>
              </button>
              <button>
                <i class="fa-solid fa-greater-than"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="Avathars">
        <div className="Avathar">
          <div className="avatar">
            <img src={avathar1}></img>
          </div>
          <div id="heading">
            <b>Joe Blo Visited:</b> France
          </div>
          <div id="detailes">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque pulvinar lorem justo, id faucibus mi.”
          </div>
        </div>
        <div className="Avathar">
          <div className="avatar">
            <img src={avathar2}></img>
          </div>
          <div id="heading">
            <b>Joe Blo Visited:</b> France
          </div>
          <div id="detailes">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque pulvinar lorem justo, id faucibus mi.”
          </div>
        </div>
        <div className="Avathar">
          <div className="avatar">
            <img src={avathar3}></img>
          </div>
          <div id="heading">
            <b>Joe Blo Visited:</b> France
          </div>
          <div id="detailes">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque pulvinar lorem justo, id faucibus mi.”
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
      <div className="reviewslider">
        <Reviewslider></Reviewslider>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Homepage;
