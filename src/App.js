import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="my-brand">Adopt me!</h1>
      <Pet name="Charlie" animal="Dog" breed="Shih tzu" />
      <Pet name="Kyubi" animal="Cat" breed="Unknown" />
      <Pet name="Tod" animal="Dog" breed="Lhasa Apso" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
