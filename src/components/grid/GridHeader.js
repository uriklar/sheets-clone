import React from "react";
import styles from "./GridHeader.module.css";

export default function GridHeader({ columns }) {
  return columns.map(col => (
    <div
      className={[
        "grid-item",
        styles.columnHeader,
        col === "" ? styles.x0y0 : ""
      ].join(" ")}
      key={col}
    >
      {col}
    </div>
  ));
}
