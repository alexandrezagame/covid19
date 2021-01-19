/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerIcons}>
        <a href="https://www.linkedin.com/in/alexandrezagame/" target="_blank">
          <FontAwesomeIcon
            className={styles.icon}
            icon={faLinkedin}
            size="2x"
          />
        </a>

        <a href="https://github.com/alexandrezagame" target="_blank">
          <FontAwesomeIcon
            className={styles.icon}
            icon={faGithubAlt}
            size="2x"
          />
        </a>

        <a
          href="https://medium.com/@alexbacelo/from-sales-to-web-development-a-journey-of-learning-4ee2c826df46?source=friends_link&sk=e7aa09d4694d10caf6a3e90a79ccf4cd"
          target="_blank"
        >
          <FontAwesomeIcon className={styles.icon} icon={faMedium} size="2x" />
        </a>
      </div>
      <div className={styles.footerCopyright}>
        <p>© 2021 Alex Zagame</p>
      </div>
    </div>
  );
};

export default Footer;
