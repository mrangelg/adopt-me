import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, { name: "Nena", animal: "Dog", breed: "Pincher" }),
    React.createElement(Pet, { name: "Andy", animal: "Cat", breed: "Mixed" }),
    React.createElement(Pet, { name: "Lucas", animal: "Duck", breed: "Mixed" }),
    React.createElement(Pet, {
      name: "Roberto",
      animal: "Bird",
      breed: "Cacatua",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
