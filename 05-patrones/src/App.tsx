import "./App.css";
import Compound from "./patrones/compound/Compound";
import Provider from "./patrones/provider/Provider";
import Hoc from "./patrones/hoc/index";

function App() {
  return (
    <div>
      <Hoc />
      <Provider />
      <Compound />
    </div>
  );
}

export default App;
