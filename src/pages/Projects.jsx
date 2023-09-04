import React from "react";
import Project from "../components/Project";
import Pro1 from "../projects/pro1.png";

export default function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-page-title">Projects</div>
      <div className="projecfts-page-subtitle">Websites I've built so far</div>

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
  );
}
