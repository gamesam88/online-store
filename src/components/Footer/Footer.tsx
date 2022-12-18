import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../assets/images/logo.png';
import rsIcon from '../../assets/icons/rs_school_js.svg';
import githubIcon from '../../assets/icons/github.svg';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <img className={styles.logo} src={logo} />
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <a href="https://github.com/gamesam88/online-store">
                  <img src={githubIcon} alt="github" />
                </a>
              </li>
              <li className={styles.item}>
                <a href="https://rs.school/js/">
                  <img src={rsIcon} alt="RS-school" />
                </a>
              </li>
            </ul>
          </nav>
          <span>
            <b>© 2022 Q3</b>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
