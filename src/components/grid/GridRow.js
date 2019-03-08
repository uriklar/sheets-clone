import React, { memo } from "react";

import RowNumber from "./RowNumber";
import Cell from "./Cell";

export default memo(function GridRow({ rowNumber, columns }) {
  return columns.map((column, i) => {
    const key = `${column}${rowNumber}`;

    return i === 0 ? (
      <RowNumber row={rowNumber} key={key} />
    ) : (
      <Cell key={key} id={key} />
    );
  });
});
