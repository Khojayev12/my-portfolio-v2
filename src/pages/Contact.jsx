import React from "react";
import { GrMail, GrInstagram } from "react-icons/gr";
import { FaTelegram } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

export default function Contact() {
  return (
    <div className="projects-page">
      <div className="projects-page-title">
        I am glad that you decided to contact me!
      </div>
      <div className="projecfts-page-subtitle margin-b-zero">
        <GrMail className="contact-icons" /> khojayev12@gmail.com
      </div>
      <div className="projecfts-page-subtitle margin-b-zero">
        <FaTelegram className="contact-icons" /> xojayev_yoldoshbek
      </div>
      <div className="projecfts-page-subtitle margin-b-zero">
        <BsGithub className="contact-icons" /> Khojayev12
      </div>
      <div className="projecfts-page-subtitle margin-b-zero">
        <GrInstagram className="contact-icons" /> xojayev_yoldoshbek
      </div>
    </div>
  );
}
