import React from "react";
import Project from "../components/Project";
import Pro1 from "../projects/pro1.png";
import Footer from "../components/Footer";

export default function Projects() {
  return (
    <>
      <div className="projects-page">
        <div className="projects-page-title"  data-aos="fade-right">Projects</div>
        <div className="projecfts-page-subtitle"  data-aos="fade-right">
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
    </>
  );
}
