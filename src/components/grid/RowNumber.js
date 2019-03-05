import React from "react";
import styles from "./RowNumber.module.css";

export default function RowNumber({ row }) {
  return <div className={`grid-item ${styles.rowNumber}`}>{row}</div>;
}
