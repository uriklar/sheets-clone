import * as React from "react";
import styles from "./Grid.module.css";
import "./Grid.css";

import GridHeader from "./GridHeader";
import GridRows from "./GridRows";

const COLUMNS = ["", "A", "B", "C", "D", "E", "F", "G", "H"];
const NUM_OF_ROWS = 10;

export default function Grid() {
  return (
    <div className={styles.container}>
      <GridHeader columns={COLUMNS} />
      <GridRows numOfRows={NUM_OF_ROWS} columns={COLUMNS} />
    </div>
  );
}
