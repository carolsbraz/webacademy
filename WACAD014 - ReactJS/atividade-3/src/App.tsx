import "./App.css";
import Action from "./components/Action";
import Adventure from "./components/Adventure";
import Comedy from "./components/Comedy";
import MostLiked from "./components/MostLiked";
import MostPopular from "./components/MostPopular";
import Romance from "./components/Romance";

function App() {
  return (
    <div>
      <MostPopular />
      <br />
      <MostLiked />
      <br />
      <Comedy />
      <br />
      <Action />
      <br />
      <Adventure />
      <br />
      <Romance />
    </div>
  );
}

export default App;
