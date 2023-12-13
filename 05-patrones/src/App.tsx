import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodosContainer from "./patrones/cap/TodoContainer";
import ContactsContainer from "./patrones/provider";
import Store from "./patrones/provider/store";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Store>
				<ContactsContainer />
			</Store>
		</>
	);
}

export default App;
