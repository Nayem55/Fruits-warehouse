import React, { useState } from "react";
import "./Header.css";
import logo from "./Fruitify.png";
import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase_init";
import { signOut } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const user = useAuthState(auth);
  let activeStyle = {
    color: "#83bf2d",
  };
  return (
    <div className="header">
      <div className="mobile-header">
        <img className="logo" src={logo} alt="" />
        <FontAwesomeIcon
          onClick={() => setNavOpen(!navOpen)}
          className="icon"
          icon={faBars}
        ></FontAwesomeIcon>
      </div>

      <div className={`navLinks ${navOpen ? "navShow" : "navHide"}`}>
        <NavLink
          to="/home"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/inventory"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Inventory
        </NavLink>
        <NavLink
          to="/manage"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Manage
        </NavLink>
        <NavLink
          to="/login"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="mobile-login"
        >
          Login
        </NavLink>

        <div className="user-container">
          <p onClick={() => setOpen(!open)}>User</p>
          <div className={`user-options ${open ? "show" : "hide"}`}>
            <NavLink
              to="/home"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
            <NavLink
              to="/inventory"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Inventory
            </NavLink>
            <NavLink
              to="/manage"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Manage
            </NavLink>
            {user[0]?.email ? (
              <NavLink
                onClick={() => signOut(auth)}
                to="/login"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Sign out
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
