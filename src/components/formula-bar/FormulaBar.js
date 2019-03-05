import React from "react";
import styles from "./FormulaBar.module.css";
import Icon from "../common/Icons";
import FormulaBarInput from "./FormulaBarInput";
import Separator from "../common/Separator";

export default function FormulaBar() {
  return (
    <div className={styles.container}>
      <Icon icon="fx" />
      <Separator />
      <FormulaBarInput />
    </div>
  );
}
