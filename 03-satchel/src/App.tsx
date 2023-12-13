import { useState } from "react";
import "./App.css";
import { addTodo, completeTodo } from "./actions/todoActions";
import { observer } from "mobx-react";
import getStore from "./store/store";

export default observer(function App() {
	const [text, setText] = useState("");

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (!!text) {
			addTodo(text);
			setText("");
		}
	}

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		setText(event.target.value);
	}

	function handleChangeCheckbox(id: string) {
		completeTodo(id);
	}

	return (
		<div>
			<form action='' onSubmit={handleSubmit}>
				<input type='text' onInput={handleChange} value={text} />
			</form>

			<div className='todosContainer'>
				{getStore().todos.map((todo) => (
					<div key={todo.id} className='todo'>
						<input
							type='checkbox'
							checked={todo.completed}
							onChange={() => handleChangeCheckbox(todo.id)}
						/>
						<span>{todo.text}</span>
					</div>
				))}
			</div>
		</div>
	);
});
