import { BiSun, BiMoon } from "react-icons/bi";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [dayTheme, setDayTheme] = useState(false);
  const changeTheme = () => {
    setDayTheme(!dayTheme);
    if (dayTheme) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  };
  const setLightTheme = () => {
    document.documentElement.style.setProperty("--background", "white");
    document.documentElement.style.setProperty("--h2", "#666");
    document.documentElement.style.setProperty("--h1", "#42446E");
    document.documentElement.style.setProperty("--h3", "#000");
    document.documentElement.style.setProperty("--title", "#42446E");
    document.documentElement.style.setProperty("--bg2", "#fff");
  };
  const setDarkTheme = () => {
    document.documentElement.style.setProperty("--background", "#191919");
    document.documentElement.style.setProperty("--h2", "#A7A7A7");
    document.documentElement.style.setProperty("--h1", "#CCC");
    document.documentElement.style.setProperty("--h3", "#CCC");
    document.documentElement.style.setProperty("--title", "#D9D9D9");
    document.documentElement.style.setProperty("--bg2", "#363636");
  };
  return (
    <div className="header">
      <div className="head-logo">Khoja</div>
      <div className="head-menus">
        <div className="head-menu">
          <Link className="my-link" to="/">Home</Link>
        </div>
        <div className="head-menu">
          <Link className="my-link" to="/about">About</Link>
        </div>
        <div className="head-menu">
          <Link className="my-link" to="/projects">Projects</Link>
        </div>
        <div className="head-menu">
          <Link className="my-link" to="/contact">Contact</Link>
        </div>
        <div className="head-change-theme" onClick={changeTheme}>
          <input
            type="checkbox"
            name="theme"
            id="theme-change"
            value={dayTheme}
          />
          {dayTheme ? (
            <BiMoon className="theme-icon" />
          ) : (
            <BiSun className="theme-icon" />
          )}
        </div>
      </div>
    </div>
  );
}
