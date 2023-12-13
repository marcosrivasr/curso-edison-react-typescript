import { createContext, useContext, useState } from "react";

export interface Contact {
	id: number;
	name: string;
	email: string;
	phone: string;
}

interface AppContextProps {
	contacts: Contact[];
	addContact: (contact: Contact) => void;
}
const AppContext = createContext<AppContextProps>({
	contacts: [],
	addContact: () => {},
});

export default function Store({ children }: { children: React.ReactNode }) {
	const [contacts, setContacts] = useState<Contact[]>([]);

	function addContact(contact: Contact) {
		console.log("addContact", contact);
		setContacts([...contacts, contact]);
	}

	return (
		<AppContext.Provider value={{ contacts, addContact }}>
			{children}
		</AppContext.Provider>
	);
}

export function useAppContext() {
	return useContext(AppContext);
}
