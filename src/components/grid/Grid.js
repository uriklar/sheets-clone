import React, { useContext } from "react";
import styles from "./Grid.module.css";
import "./Grid.css";

import GridHeader from "./GridHeader";
import GridRows from "./GridRows";
import AddRows from "./AddRows";

const COLUMNS = ["", "A", "B", "C", "D", "E", "F", "G", "H"];

export default function Grid() {
  return (
    <div className={styles.container}>
      <GridHeader columns={COLUMNS} />
      <GridRows columns={COLUMNS} />
      <AddRows />
    </div>
  );
}
