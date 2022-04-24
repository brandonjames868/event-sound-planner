import { NavLink } from "react-router-dom";
import React from "react";

const MainNav = () => (
  <div className="navbar-nav mr-auto">
    <NavLink
      to="/"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Home
    </NavLink>
    <NavLink
      to="/dj-list"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Directory
    </NavLink>

    <NavLink
      to="/event-planner"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Event Planner
    </NavLink>
    <NavLink
      to="/bookings"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Bookings
    </NavLink>
  </div>
);

export default MainNav;
