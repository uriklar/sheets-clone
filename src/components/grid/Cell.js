import React, { useCallback, useContext } from "react";
import { ContentStoreContext } from "../../stores/Provider";
import styles from "./Cell.module.css";
import { observer } from "mobx-react-lite";

export default observer(function Cell({ id }) {
  const store = useContext(ContentStoreContext);

  const isSelected = store.selectedCell.id === id;
  const editable = isSelected && store.selectedCell.editable;
  
  const className = `grid-item ${isSelected ? styles.selected : ""}`;
  const cellsClassNames = store.cellClassNames(id);

  const onClick = useCallback(() => store.select(id), [id]);
  const onDblClick = useCallback(() => store.edit(id), [id]);
  const onInputChange = useCallback(
    e => store.setCellProperty(id, "value", e.target.value),
    []
  );

  return (
    <div
      className={`${className} ${cellsClassNames}`}
      onClick={onClick}
      onDoubleClick={onDblClick}
    >
      {editable ? (
        <input
          className={styles.input}
          type="text"
          autoFocus
          onChange={onInputChange}
          value={store.getCellProperty(id, "value")}
        />
      ) : (
        <div className={styles.cell}>{store.getCellProperty(id, "value")}</div>
      )}
    </div>
  );
});
