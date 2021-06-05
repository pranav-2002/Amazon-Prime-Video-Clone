import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav">
      <div className="nav__contents">
        <img
          src="https://amazonuk.gcs-web.com/system/files-encrypted/nasdaq_kms/inline-images/Prime_Video_Logo.png"
          alt="logo"
          className="nav__logo"
        />
        <Link to="/login">
          <img
            src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-2.png"
            alt="avatar"
            className="nav__avatar"
          />
        </Link>
        <div className="nav__links">
          <Link exact to="/">
            Home
          </Link>
          <Link to="/tv">TV Shows</Link>
          <Link to="/movie">Movies</Link>
          <Link to="/kids">Kids</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
