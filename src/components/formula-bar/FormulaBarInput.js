import React, { useContext, useCallback } from "react";
import { observer } from "mobx-react-lite";
import { ContentStoreContext } from "../../stores/Provider";
import styles from "./FormulaBarInput.module.css";

export default observer(function FormulaBarInput() {
  const store = useContext(ContentStoreContext);
  const onInputChange = useCallback(
    e => store.setCellProperty(store.selectedCell.id, "value", e.target.value),
    []
  );

  return (
    <input
      type="text"
      className={styles.input}
      value={store.selected.value || ""}
      onChange={onInputChange}
    />
  );
});
