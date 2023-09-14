import { FaTelegram } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import React from "react";

export default function Footer() {
  return (
    <div className="home-footer">
      <div className="header head-foot">
        <div className=" dark-logo">Khoja</div>
        <div className="head-menus">
          <div className="head-menu">+998 99 968 15 57</div>
          <div className="head-menu">khojayev12@gmail.com</div>
          <Link to="#">
            <BsGithub className="theme-icon foot-icon" />
          </Link>
          <Link to="#">
            <FaTelegram className="theme-icon foot-icon" />
          </Link>
        </div>
      </div>
      <div className="under-foot"></div>
    </div>
  );
}
