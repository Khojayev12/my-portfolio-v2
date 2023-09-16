import React from "react";
import MyImg from "../images/me.jpg";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <div className="about-page">
        <div
          className="hero-section"
          style={{ marginLeft: "0px", width: "100%" }}
        >
          <div className="hero-text"  data-aos="fade-right">
            <div className="projects-page-title" style={{ marginTop: "0px" }}>
              About me
            </div>
            <div className="projecfts-page-subtitle">
              Hey there, I'm Xo'jayev Yo'ldoshbek, a 17-year-old front-end
              ReactJS developer with a passion for crafting beautiful and
              responsive websites. <br />
              <br />
              Ever since I was young, I've had a fascination with coding and
              design. It's not just a hobby; it's my way of making the web a
              more visually stunning and user-friendly place. <br />
              <br />I specialize in using ReactJS to build dynamic and
              interactive web applications. I believe that a website should not
              only function flawlessly but also look amazing on any device.
              That's why I'm committed to creating responsive designs that adapt
              seamlessly. <br />
              <br />
              But here's the exciting part: I'm not stopping here. I'm always
              eager to learn new technologies and improve my skills. I believe
              in the power of continuous growth and staying ahead in the
              ever-evolving world of web development. <br />
              <br />
              <br />
            </div>
          </div>
          <div className="hero-img" style={{position:"fixed", right:"7%"}}>
            <div className="hero-cyrcle-img">
              <img src={MyImg} alt="" className="hero-image" />
            </div>
          </div>
        </div>

        <div className="projects-page-title" data-aos="fade-up">Work Experience</div>
        <div className="about-job" data-aos="fade-up">
          <span>
            <div className="about-job-status">Junior Web Developer</div>
            <div className="about-job-loc">Freelance, Tashkent</div>
          </span>
          <span>
            <div className="about-job-time">Part-time</div>
            <div className="about-job-date">Sep 2022 - June 2023</div>
          </span>
        </div>
        <div className="about-job" data-aos="fade-up">
          <span>
            <div className="about-job-status">Junior Web Developer</div>
            <div className="about-job-loc">Freelance, Tashkent</div>
          </span>
          <span>
            <div className="about-job-time">Part-time</div>
            <div className="about-job-date">Sep 2022 - June 2023</div>
          </span>
        </div>
        <div className="about-job" data-aos="fade-up">
          <span>
            <div className="about-job-status">Junior Web Developer</div>
            <div className="about-job-loc">Freelance, Tashkent</div>
          </span>
          <span>
            <div className="about-job-time">Part-time</div>
            <div className="about-job-date">Sep 2022 - June 2023</div>
          </span>
        </div>

        <div className="projects-page-title" data-aos="fade-up">Education</div>
        <div className="about-job" data-aos="fade-up">
          <div className="about-job-status">Presidential School in Khiva</div>
          <div className="about-job-date">Sep 2022 - June 2023</div>
        </div>
        <div className="about-job" data-aos="fade-up">
          <div className="about-job-status">University of Coventry</div>
          <div className="about-job-date">Sep 2023</div>
        </div>

        <div className="projects-page-title" data-aos="fade-up">Languages</div>
        <div className="about-job" data-aos="fade-up">
          <div className="about-job-status">Uzbek</div>
          <div className="about-job-date">National language</div>
        </div>
        <div className="about-job" data-aos="fade-up">
          <div className="about-job-status">English</div>
          <div className="about-job-date">C1</div>
        </div>
        <div className="about-job" data-aos="fade-up">
          <div className="about-job-status">Russian</div>
          <div className="about-job-date">C1</div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
