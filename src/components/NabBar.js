import React from "react";
import { Link } from "@reach/router";
import colors from "./colors";

console.log(colors.primary);

const NabBar = () => (
  <header style={{ backgroundColor: colors.secondary }}>
    <Link to="/">Adopt Me</Link>
    <span
      style={{ fontSize: "60px" }}
      aria-label="logo"
      role="img"
    >
      🐩
    </span>
  </header>
);

export default NabBar;
