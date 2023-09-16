import React from "react";
import { GrMail, GrInstagram } from "react-icons/gr";
import { FaTelegram } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="projects-page">
      <div className="projects-page-title">
        I am glad that you decided to contact me!
      </div>
      <div className="social-labels margin-b-zero">
        <Link to="#" className="my-link" >
          <GrMail className="contact-icons" /> khojayev12@gmail.com
        </Link>
      </div>
      <div className="social-labels margin-b-zero">
        <Link to="#" className="my-link" >
          <FaTelegram className="contact-icons" /> xojayev_yoldoshbek
        </Link>
      </div>
      <div className="social-labels margin-b-zero">
        <Link to="#" className="my-link" >
          <BsGithub className="contact-icons" /> Khojayev12
        </Link>
      </div>
      <div className="social-labels margin-b-zero">
        <Link to="#" className="my-link" >
          <GrInstagram className="contact-icons" /> xojayev_yoldoshbek
        </Link>
      </div>
    </div>
  );
}
