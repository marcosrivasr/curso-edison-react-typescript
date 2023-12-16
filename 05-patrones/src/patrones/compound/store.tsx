import { createContext, useContext, useState } from "react";

export interface Tab {
	id: number;
	title: string;
}

interface AppContextProps {
	tab: number;
	setTab: (tab: number) => void;
}
const AppContext = createContext<AppContextProps>({
	tab: 0,
	setTab: () => {},
});

export default function Store({ children }: { children: React.ReactNode }) {
	const [tab, setTab] = useState<number>(0);

	return (
		<AppContext.Provider value={{ tab, setTab }}>
			{children}
		</AppContext.Provider>
	);
}

export function useAppContext() {
	return useContext(AppContext);
}
