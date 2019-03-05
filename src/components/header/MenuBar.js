import React from "react";

import styles from "./Header.module.css";

export default function MenuBar() {
  return (
    <div className={styles.menuBarContainer}>
      <div className={styles.menuItem}>File</div>
      <div className={styles.menuItem}>Edit</div>
      <div className={styles.menuItem}>View</div>
      <div className={styles.menuItem}>Insert</div>
      <div className={styles.menuItem}>Format</div>
      <div className={styles.menuItem}>Data</div>
      <div className={styles.menuItem}>Tools</div>
      <div className={styles.menuItem}>Add-ons</div>
      <div className={styles.menuItem}>Help</div>
    </div>
  );
}
