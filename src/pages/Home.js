import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import Resume from "../assets/FeliciaChen_Resume.pdf"

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hello, my name is Felicia</h2>
        <div className="prompt">
          <p>A computer science student at McGill University who loves learning and creating</p>
          <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/chen-felicia/')}/>
          <EmailIcon onClick={() => window.open('mailto:felicia.qf.chen@gmail.com')}/>
          <GithubIcon onClick={() => window.open('https://github.com/fei-felicia-chen')} />
        </div>
        <div>
            <a href={Resume} target="_blank" rel="noreferrer" className="BUTTON_XIV">
              View my resume
            </a>
          </div>
      </div>
      <div className="skills">
        <center><h1> About me </h1></center>
        <div className="prompt">
          <p> Hello! My name is Felicia and I am a student at McGill University pursuing a degree in Computer Science.
            I currently have interests in game dev, web dev, data science, and cybersecurity, and I am always willing to expand my knowledge to any tech.
          </p>
          <p>
            During my free time, if I am not doing a side project, I am most likely watching a show, playing a video game, or vibing with music.
            Feel free to reach me through any of my social media~ I would love to connect!
          </p>
          </div>
        <ol className="list">
          <li className="item">
            <center><h2> Languages and Tools </h2>
            <span>
              Python, C, C++, C#, Java, Go, JavaScript, ReactJS
              </span>
            </center>
          </li>
{/*       
          <li className="item">
            <h2>Languages</h2>
            <span> JavaScript, Java, Python, C#, C, C++, Go</span>
          </li> */}
        </ol>
      </div>
    </div>
  );
}

export default Home;