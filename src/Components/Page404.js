import React from "react";
import Navbar from "./Navbar";
import "./Page404.css";

function Page404() {
  return (
    <div>
      <Navbar />
      <div className="jumbotron">
        <img
          src="https://freefrontend.com/assets/img/html-css-404-page-templates/HTML-UI-404-Page.png"
          alt="pic"
        />
      </div>
    </div>
  );
}

export default Page404;
