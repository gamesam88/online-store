import React from "react";
import "./Footer.scss";
import logo from "../../assets/images/logo.png";
import rsIcon from "../../assets/icons/rs_school_js.svg";
import githubIcon from "../../assets/icons/github.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img className="footer__logo" src={logo} />
        <nav className="footer__nav">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="https://github.com/gamesam88">
                <img src={githubIcon} alt="github" />
              </a>
            </li>
            <li className="footer__item">
              <a href="https://rs.school/js/">
                <img src={rsIcon} alt="RS-school" />
              </a>
            </li>
            <li className="footer__item">
              <a href="https://github.com/DenisMezhuev">
                <img src={githubIcon} alt="github" />
              </a>
            </li>
          </ul>
        </nav>
        <span>
          <b>© 2022 Q3</b>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
