import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footerMain">
      <div className="footer__content">
        <img
          src="https://amazonuk.gcs-web.com/system/files-encrypted/nasdaq_kms/inline-images/Prime_Video_Logo.png"
          alt="logo"
        />
        <div className="footer__text">
          <Link to="https://www.primevideo.com/help/ref=dvm_MLP_EU_privacy?nodeId=202064890">
            Terms and Privacy Notice
          </Link>
          <Link to="Send us feedback">Send us feedback</Link>
          <Link to="https://www.primevideo.com/help/ref=dvm_MLP_EU_help">
            Help
          </Link>
          <span>© 1996-2021, Amazon.com, Inc. or its affiliates</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
