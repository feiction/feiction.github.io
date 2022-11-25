import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon onClick={() => window.open('https://www.instagram.com/fei__felicia/')}/>
        <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/chen-felicia/')} />
        <EmailIcon onClick={() => window.open('mailto:felicia.qf.chen@gmail.com')}/>
        <GithubIcon onClick={() => window.open('https://github.com/fei-felicia-chen')}/>
      </div>
      <p> Created by Felicia Chen &copy; 2022 </p>
    </div>
  );
}

export default Footer;