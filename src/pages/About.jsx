import React from "react";
import MyImg from "../images/me.jpg";

export default function About() {
  return (
    <div className="about-page">
      <div className="hero-section">
        <div className="hero-text">
          <div className="projects-page-title" style={{ marginTop: "0px" }}>
            About me
          </div>
          <div className="projecfts-page-subtitle">
            Hey there, I'm Xo'jayev Yo'ldoshbek, a 17-year-old front-end ReactJS
            developer with a passion for crafting beautiful and responsive
            websites. <br />
            <br />
            Ever since I was young, I've had a fascination with coding and
            design. It's not just a hobby; it's my way of making the web a more
            visually stunning and user-friendly place. <br />
            <br />I specialize in using ReactJS to build dynamic and interactive
            web applications. I believe that a website should not only function
            flawlessly but also look amazing on any device. That's why I'm
            committed to creating responsive designs that adapt seamlessly.{" "}
            <br />
            <br />
            But here's the exciting part: I'm not stopping here. I'm always
            eager to learn new technologies and improve my skills. I believe in
            the power of continuous growth and staying ahead in the
            ever-evolving world of web development. <br />
            <br />
            <br />
          </div>
        </div>
        <div className="hero-img">
          <div className="hero-cyrcle-img">
            <img src={MyImg} alt="" className="hero-image" />
          </div>
        </div>
      </div>
    </div>
  );
}
