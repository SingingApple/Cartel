import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div
      className="navbar d-flex justify-content-between "
      aria-label="breadcrumb"
    >
      <div className="navbar__link">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/asd">Library</NavLink>
      </div>
      <div className="navbar__user-info d-flex align-items-center">
        <span className="navbar__username">Username</span>
        <i className="fas fa-user-circle fa-2x"></i>
      </div>
    </div>
  );
};

export default Navbar;
