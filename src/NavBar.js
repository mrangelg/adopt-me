import React, { useState } from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";

const NavBar = () => {
  const [padding, setPadding] = useState(5);
  return (
    <header
      onClick={() => setPadding(padding + 5)}
      css={css`
        background-color: #333;
        padding: ${padding}px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        css={css`
          font-size: 60px;
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
