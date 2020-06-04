import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Pet name="Nena" animal="Dog" breed="Pincher" />
      <Pet name="Andy" animal="Cat" breed="Mixed Prettier" />
      <Pet name="Lucas" animal="Duck" breed="Mixed" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
