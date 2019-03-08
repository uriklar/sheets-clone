import React, { useContext } from "react";
import { AppStoreContext } from "../../stores/Provider";

import GridRow from "./GridRow";
import { observer } from "mobx-react-lite";

export default observer(function({ columns }) {
  const store = useContext(AppStoreContext);

  let rows = [];

  for (let row = 1; row <= store.rows; row++) {
    rows.push(<GridRow rowNumber={row} columns={columns} key={row} />);
  }

  return rows;
});
