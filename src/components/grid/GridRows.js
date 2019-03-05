import React from "react";

import GridRow from "./GridRow";

const GridRows = function({ numOfRows, columns, contentStore }) {
  let rows = [];

  for (let row = 1; row <= numOfRows; row++) {
    rows.push(<GridRow rowNumber={row} columns={columns} key={row} />);
  }

  return rows;
};

export default GridRows;
