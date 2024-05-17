import React from "react";
import styles from "./SocialMedia.module.css";

const SocialMedia = () => {
  return (
    <div className={(styles.wrapr = -per)}>
      <div className={(styles.icon, styles.facebook)}>
        <div className={styles.tooltip}>Facebook</div>
        <span>
          <i className="fab fa-facebook"></i>
        </span>
      </div>
      <div className={(styles.icon, styles.twitter)}>
        <div className={styles.tooltip}>Twitter</div>
        <span>
          <i className="fab fa-twitter"></i>
        </span>
      </div>
      <div className={(styles.icon, styles.instagram)}>
        <div className={styles.tooltip}>Instagram</div>
        <span>
          <i className="fab fa-instagram"></i>
        </span>
      </div>
      <div className={(styles.icon, styles.linkedin)}>
        <div className={styles.tooltip}>Linkedin</div>
        <span>
          <i className="fab fa-linkedin"></i>
        </span>
      </div>
      <div className={(styles.icon, styles.youtube)}>
        <div className={styles.tooltip}>Youtube</div>
        <span>
          <i className="fab fa-youtube"></i>
        </span>
      </div>
    </div>
  );
};

export default SocialMedia;
