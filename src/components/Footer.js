import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon onClick={() => window.open('https://www.instagram.com/fei__felicia/')}/>
        <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/chen-felicia/')}/>
      </div>
      <p> &copy; Felicia Chen</p>
    </div>
  );
}

export default Footer;