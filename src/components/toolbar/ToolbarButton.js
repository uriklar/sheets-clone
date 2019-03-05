import React from "react";
import styles from "./ToolbarButton.module.css";

export default function ToolbarButton({ children, onClick, isSelected }) {
  return (
    <div
      className={`${styles.container} ${isSelected ? styles.selected : ""}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
