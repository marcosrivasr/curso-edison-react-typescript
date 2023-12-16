import Store, { useAppContext } from "./store";
import { Children, isValidElement, useEffect, useState } from "react";

export function TabComponent({ children }: { children: React.ReactNode }) {
	return (
		<Store>
			<div className='tabsComponent'>{children}</div>
		</Store>
	);
}

export function Tabs({ children }: { children: React.ReactNode }) {
	return (
		<div className='tabsContainer'>
			{Children.map(children, (child, index) => {
				if (isValidElement(child)) {
					return { ...child, props: { ...child.props, index } };
				}
				return null;
			})}
		</div>
	);
}

export function Tab({ index, title }: { index?: number; title: string }) {
	const store = useAppContext();

	function handleClick() {
		if (index !== undefined) {
			store.setTab(index);
		}
	}

	if (index === undefined) {
		return null;
	}

	return (
		<div className='tab'>
			<button
				onClick={handleClick}
				className={store.tab === index ? "activeTab" : ""}
			>
				{title}
			</button>
		</div>
	);
}

export function TabContentContainer({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='tabContentContainer'>
			{Children.map(children, (child, index) => {
				if (isValidElement(child)) {
					return { ...child, props: { ...child.props, index } };
				}
				return null;
			})}
		</div>
	);
}

export function TabContent({
	children,
	index,
}: {
	children: React.ReactNode;
	index?: number;
}) {
	const store = useAppContext();
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		setVisible(store.tab === index);
	}, [store.tab]);

	if (index === undefined) {
		return null;
	}

	return <>{visible && <div className='tabContent'>{children}</div>}</>;
}

export default {
	View: TabComponent,
	Container: Tabs,
	Item: Tab,
	ContentContainer: TabContentContainer,
	Content: TabContent,
};
