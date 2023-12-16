import Tabs from "./index";

function Compound() {
	return (
		<div>
			{/* <TabComponent>
				<Tabs>
					<Tab title='Home'></Tab>
					<Tab title='Settings'></Tab>
					<Tab title='Help'></Tab>
				</Tabs>

				<TabContentContainer>
					<TabContent>Hola 1</TabContent>
					<TabContent>Hola 2</TabContent>
					<TabContent>Hola 3</TabContent>
				</TabContentContainer>
			</TabComponent> */}

			<Tabs.View>
				<Tabs.Container>
					<Tabs.Item title='Home' />
					<Tabs.Item title='Settings' />
					<Tabs.Item title='Help' />
				</Tabs.Container>

				<Tabs.ContentContainer>
					<Tabs.Content>Hola 1</Tabs.Content>
					<Tabs.Content>Hola 2</Tabs.Content>
					<Tabs.Content>Hola 3</Tabs.Content>
				</Tabs.ContentContainer>
			</Tabs.View>
		</div>
	);
}

export default Compound;
