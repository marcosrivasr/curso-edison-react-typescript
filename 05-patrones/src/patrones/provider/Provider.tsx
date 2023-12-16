import ContactsContainer from "./index";
import Store from "./store";

export default function Provider() {
	return (
		<Store>
			<ContactsContainer />
		</Store>
	);
}
