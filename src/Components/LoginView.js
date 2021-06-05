import React from "react";
import LoginContents from "./LoginContents";
import LoginNavbar from "./LoginNavbar";

function LoginView() {
  return (
    <div className="LoginView">
      <LoginNavbar />
      <LoginContents />
    </div>
  );
}

export default LoginView;
