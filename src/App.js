import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt me!"),
    React.createElement(Pet, {
      name: "Charlie",
      animal: "Dog",
      breed: "Shih tzu",
    }),
    React.createElement(Pet, {
      name: "Kyubi",
      animal: "Cat",
      breed: "Unknown",
    }),
    React.createElement(Pet, {
      name: "Tod",
      animal: "Dog",
      breed: "Lhasa Apso",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
