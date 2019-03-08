import React, { useContext, useCallback, useState } from "react";
import { AppStoreContext } from "../../stores/Provider";

import styles from "./Header.module.css";
import { observer } from "mobx-react-lite";

export default observer(function SheetName() {
  const store = useContext(AppStoreContext);
  const [sheetName, setSheetName] = useState(null);

  const onInputChange = useCallback(e => setSheetName(e.target.value), []);
  const onBlur = useCallback(e => store.setSheetName(sheetName), [sheetName]);

  return (
    <input
      type="text"
      className={styles.sheetNameInput}
      value={sheetName || store.sheetName}
      onChange={onInputChange}
      onBlur={onBlur}
      placeholder="Untitled spreadsheet"
    />
  );
});
