import React, { useContext, useCallback } from "react";
import { AppStoreContext } from "../../stores/Provider";

import styles from "./Header.module.css";
import { observer } from "mobx-react-lite";

export default observer(function SheetName() {
  const store = useContext(AppStoreContext);
  const onInputChange = useCallback(
    e => store.setSheetName(e.target.value),
    []
  );

  return (
    <input
      type="text"
      className={styles.sheetNameInput}
      value={store.sheetName}
      onChange={onInputChange}
      placeholder="Untitled spreadsheet"
    />
  );
});
