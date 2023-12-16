import "./App.css";
import Compound from "./patrones/compound/Compound";
import Provider from "./patrones/provider/Provider";

function App() {
	return (
		<div>
			<Provider />
			<Compound />
		</div>
	);
}

export default App;
