import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-header">
          <div className="nav-title">

            Thomson Thomas
          </div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <input type="checkbox" id="nav-check" />
      <div className="nav-links">
        <Link to="/porthome" id="about"
          className={window.location.pathname === "/porthome" ? "active-page" : "nav-link"}>About</Link>
        <Link to="/showcaseportfolio" id="portfolio"
          className={(window.location.pathname === "/showcaseportfolio") ? "active-page" : "nav-link"}>Portfolio</Link>
        <Link to="/portcontact" id="contact"
          className={(window.location.pathname === "/portcontact") ? "active-page" : "nav-link"}>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar;