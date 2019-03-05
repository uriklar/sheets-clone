import * as React from "react";
import logo from "../../assets/images/logo.png";
import styles from "./Header.module.css";
import Avatar from "./Avatar";
import SheetName from "./SheetName";
import MenuBar from "./MenuBar";
import GoogleLogin from "react-google-login";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={logo} className={styles.logo} alt="Logo" />
      </div>

      <div className={styles.mainSectionContainer}>
        <SheetName />
        <MenuBar />
      </div>
      <div>
        <Avatar />
      </div>
    </header>
  );
}
