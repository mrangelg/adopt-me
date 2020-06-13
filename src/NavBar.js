import React, { useState } from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";
import colors from "./colors";

const NavBar = () => {
  const [padding, setPadding] = useState(5);
  return (
    <header
      onClick={() => setPadding(padding + 5)}
      css={css`
        background-color: ${colors.dark};
        padding: ${padding}px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        css={css`
          font-size: 60px;
          &:hover {
            scale: 1.2;
          }
        `}
        aria-label="logo"
        role="img"
      >
        🐶
      </span>
    </header>
  );
};

export default NavBar;
