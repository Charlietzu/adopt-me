const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

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
