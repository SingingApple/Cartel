import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const location = useLocation();

  let paths = location.pathname.split("/").filter((x) => x !== "");

  return (
    <div
      className="navbar d-flex justify-content-between "
      aria-label="breadcrumb"
    >
      <div className="navbar__link">
        <NavLink to="/">HOME</NavLink>
        {paths.map((path, index) => {
          let routeTo = `/${paths.slice(0, index).join("/")}`;
          return (
            <span>
              {!index && ">"}
              <NavLink activeClassName="active-navbar" to={routeTo}>
                {path.toUpperCase()}
              </NavLink>
              {index + 1 === paths.length ? null : ">"}
            </span>
          );
        })}
      </div>
      <div className="navbar__user-info d-flex align-items-center">
        <span className="navbar__username">Username</span>
        <i className="fas fa-user-circle fa-2x"></i>
      </div>
    </div>
  );
};

export default Navbar;
