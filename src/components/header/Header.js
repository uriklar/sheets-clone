import * as React from "react";
import logo from "../../assets/images/logo.png";
import styles from "./Header.module.css";
import Avatar from "./Avatar";

export default function Header() {
  return (
    <header className={styles.container}>
      <img src={logo} className={styles.logo} alt="Logo" />
      <div>Main section</div>
      <div>
        <Avatar />
      </div>
    </header>
  );
}
