import { React, Fragment } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Booking from "./Pages/BookingPage/Booking";
function App() {
  return (
    <Fragment className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route path="/Booking" element={<Booking />}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
