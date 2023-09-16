import React from "react";
import { BsLink45Deg, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Project(props) {
  return (
    <div className="project" data-aos="fade-up">
      <div className="project-img">
        <img src={props.img} alt="" className="projects-image" />
      </div>
      <div className="projects-text">
        <div className="pro-title">{props.title}</div>
        <div className="pro-description">{props.description}</div>
        <div className="pro-footer">
          <div className="pro-half-footer">
            <BsLink45Deg className="pro-icon" />
            <Link to="https://google.com" className="my-link">
              Live Preview
            </Link>
          </div>
          <div className="pro-half-footer">
            <BsGithub className="pro-icon" />
            <Link to={props.code} className="my-link">
              View Code
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
