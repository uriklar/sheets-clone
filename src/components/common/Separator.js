import React from "react";
export default function Separator({ margin = "8px" }) {
  return (
    <div
      style={{
        width: "1px",
        backgroundColor: "#cccccc",
        marginLeft: margin,
        marginRight: margin,
        height: "80%"
      }}
    />
  );
}
