import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/sound-waves.png"
import arrow from "../assets/img/downward-arrow.png"

const Hero = () => (
  <div className="text-center hero">
    <img className="my-3 mt-5 app-logo" src={logo} alt="Planning Icon" />
    <h1 className="mb-4">Event Sound Planner.</h1>
    <p className="lead mb-1">
      We provide DJ and Sound System suggestions based on your event. View our curated list of professional {" "}
      <NavLink
        to="/dj-list"
        exact
      >
        DJs and Hosts.
      </NavLink>
    </p>
    <img className="hero-arrow" src={arrow} alt="Planning Icon" />
  </div>
);

export default Hero;
