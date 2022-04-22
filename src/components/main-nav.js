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
      to="/profile"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Profile
    </NavLink>
    <NavLink
      to="/event-planner"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Event Planner
    </NavLink>
    {/* <NavLink
      to="/external-api"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      External API
    </NavLink> */}
  </div>
);

export default MainNav;
