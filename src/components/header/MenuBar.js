import React, { useContext } from "react";
import { DbStoreContext } from "../../stores/Provider";

import styles from "./Header.module.css";
import { observer } from "mobx-react-lite";

export default observer(function MenuBar() {
  const store = useContext(DbStoreContext);
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
      <span clasName={styles.savingIndicator}>
        {store.isSaving ? "Saving..." : "Changes saved in firebase"}
      </span>
    </div>
  );
});
