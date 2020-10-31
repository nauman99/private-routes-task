import React from "react";

import { NavLink } from "react-router-dom";

function Navbar() {
  const authCheck = localStorage.getItem("token");

  return (
    <div className="navbar">
      <NavLink to="/" exact className="nav-link">
        Shop
      </NavLink>

      <NavLink to="/orders" exact className="nav-link">
        Orders
      </NavLink>

      {authCheck ? (
        <NavLink to="/account" exact className="nav-link">
          Account
        </NavLink>
      ) : (
        <NavLink to="/login" exact className="nav-link">
          Login
        </NavLink>
      )}
    </div>
  );
}

export default Navbar;
