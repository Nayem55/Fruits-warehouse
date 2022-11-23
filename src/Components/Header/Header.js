import React from 'react';
import './Header.css'
import logo from './Fruitify.png'
import { NavLink } from "react-router-dom";


const Header = () => {
    let activeStyle = {
        color: "#83bf2d",
      };
    return (
        <div className='header'>
        <img className='logo' src={logo} alt="" />
        <div className='navLinks'>
        <NavLink
            to="/home"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Home
          </NavLink>
        <NavLink
            to="/inventory"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Inventory
          </NavLink>
        <NavLink
            to="/manage"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Manage
          </NavLink>
        <NavLink
            to="/user"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            User
          </NavLink>
        </div>
        </div>
    );
};

export default Header;