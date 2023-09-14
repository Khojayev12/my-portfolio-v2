import React from "react";
import MyImg from "../images/me.jpg";
import Image1 from "../images/bootstrap.svg";
import Image2 from "../images/html.svg";
import Image3 from "../images/css.svg";
import Image4 from "../images/git.svg";
import Image5 from "../images/github.svg";
import Image6 from "../images/js.svg";
import Image7 from "../images/react.svg";
import Image8 from "../images/tailwind.svg";
import Image9 from "../images/vscode.svg";
import Project from "../components/Project";
import Pro1 from "../projects/pro1.png";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-text">
          Hi <span role="img">👋</span>, <br />
          My name is <br />
          <span className="hero-name"> Xo'jayev Yo'ldoshbek </span> <br />I am
          Frontend Dev
        </div>
        <div className="hero-img">
          <div className="hero-cyrcle-img">
            <img src={MyImg} alt="" className="hero-image" />
          </div>
        </div>
      </div>
      <div className="tech-section">
        <div className="tech-title">My Tech Stack</div>
        <div className="tech-subtitle">
          Technologies I've been working with recently
        </div>
        <div className="tech-icons-group">
          <div className="tech-icon-container">
            <img src={Image1} alt="" className="tech-icon" />
          </div>
          <div className="tech-icon-container">
            <img src={Image2} alt="" className="tech-icon" />
          </div>
          <div className="tech-icon-container">
            <img src={Image3} alt="" className="tech-icon" />
          </div>
          <div className="tech-icon-container">
            <img src={Image4} alt="" className="tech-icon" />
          </div>
          <div className="tech-icon-container">
            <img src={Image5} alt="" className="tech-icon" />
          </div>
          <div className="tech-icon-container">
            <img src={Image6} alt="" className="tech-icon" />
          </div>
          <div className="tech-icon-container">
            <img src={Image7} alt="" className="tech-icon" />
          </div>
          <div className="tech-icon-container">
            <img src={Image8} alt="" className="tech-icon" />
          </div>
          <div className="tech-icon-container">
            <img src={Image9} alt="" className="tech-icon" />
          </div>
        </div>
      </div>
      <div className="projects-section">
        <div className="tech-title">Projects</div>
        <div className="tech-subtitle projects-subtitle">
          Websites I've built so far
        </div>
        <div className="project-group">
          <Project
            img={Pro1}
            title="sosgame.ga"
            description="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
            url="https://react-icons.github.io/"
            code="https://react-icons.github.io/"
          />
          <Project
            img={Pro1}
            title="sosgame.ga"
            description="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
            url="https://react-icons.github.io/"
            code="https://react-icons.github.io/"
          />
          <Project
            img={Pro1}
            title="sosgame.ga"
            description="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
            url="https://react-icons.github.io/"
            code="https://react-icons.github.io/"
          />
          <Project
            img={Pro1}
            title="sosgame.ga"
            description="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
            url="https://react-icons.github.io/"
            code="https://react-icons.github.io/"
          />
          <Project
            img={Pro1}
            title="sosgame.ga"
            description="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
            url="https://react-icons.github.io/"
            code="https://react-icons.github.io/"
          />
          <Project
            img={Pro1}
            title="sosgame.ga"
            description="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
            url="https://react-icons.github.io/"
            code="https://react-icons.github.io/"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
