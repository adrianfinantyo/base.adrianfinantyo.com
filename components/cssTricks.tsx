import React from "react";
import styles from "./css/runningUnderline.module.css";

export const RunningUnderline = ({ children, variants }) => {
  return (
    <a href="#" className={`${styles.runningUnderline} ${styles[variants]}`}>
      {children}
    </a>
  );
};
