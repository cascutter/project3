import {NavLink} from "react-router-dom";
import React from "react";
import App from "../App";

const MainNav = () => (
  // update classnames for styling---please do not edit wrapping code--it will break user authentication
  // if you need to add a route for a new page copy and paste one of the navlinks below  and change the to="/your-new-path" 
  // Then go to App.js and copy and paste a ProtectedRoute and edit the new route there.
  
  <div className="navbar-nav mr-auto">
    <NavLink
      to="/"
      exact
      className=""
      activeClassName="router-link-exact-active"
    >
      Home
    </NavLink>
    <NavLink
      to="/profile"
      exact
      className=""
      activeClassName="router-link-exact-active"
    >
      Profile
    </NavLink>
    <NavLink
      to="/external-api"
      exact
      className=""
      activeClassName="router-link-exact-active"
    >
      External API
    </NavLink>
  </div>
);

export default MainNav;