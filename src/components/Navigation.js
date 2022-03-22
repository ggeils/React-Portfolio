import React from "react";
import { Navbar } from "react-bootstrap";
import {NavLink} from "react-router-dom";

function Navigation(props) {
  return (
    <div>
      <Navbar expand="lg" bg="primary" sticky="top">
        <NavLink className="nav-link" to="/">
          <div class="text-light">
            <h4>George Geils</h4>
          </div>
        </NavLink>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <NavLink to="/about">
              <div class="text-light">About Me</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/portfolio">
              <div class="text-light">Portfolio</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/contact">
              <div class="text-light">Contact</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/resume">
              <div class="text-light">Resume</div>
            </NavLink>
          </li>
        </ul>
      </Navbar>
    </div>
  );
}

export default Navigation;