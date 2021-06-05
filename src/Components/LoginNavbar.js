import React from "react";
import "./LoginNavbar.css";
import { Link } from "react-router-dom";

function LoginNavbar() {
  return (
    <div className="LoginNav">
      <div className="LoginNav__content">
        <img
          src="https://amazonuk.gcs-web.com/system/files-encrypted/nasdaq_kms/inline-images/Prime_Video_Logo.png"
          alt="prime-video"
          className="LoginNav__logo"
        />

        <p className="lang">
          <i className="fa fa-globe icon"></i>EN
        </p>

        <Link to="/" className="signIn">Sign In</Link>
      </div>
    </div>
  );
}

export default LoginNavbar;
