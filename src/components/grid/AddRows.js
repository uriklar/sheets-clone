import React, { useState, useContext } from "react";
import { AppStoreContext } from "../../stores/Provider";

import styles from "./AddRows.module.css";

export default function AddRows() {
  const [rows, setRows] = useState(10);
  const store = useContext(AppStoreContext);

  return (
    <React.Fragment>
      <div className={styles.firstRowPlaceholder} />
      <div className={styles.container}>
        <button className={styles.button} onClick={() => store.addRows(rows)}>
          Add
        </button>
        <input
          type="text"
          className={styles.input}
          value={rows}
          onChange={e => setRows(e.target.value)}
        />
        <span className={styles.text}>more rows at bottom</span>
      </div>
    </React.Fragment>
  );
}
