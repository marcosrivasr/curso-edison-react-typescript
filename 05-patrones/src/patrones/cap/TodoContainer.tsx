import { useEffect, useState } from "react";

interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

export default function TodosContainer() {
	const [todos, setTodos] = useState<Todo[]>([]);

	const fetchTodos = async () => {
		try {
			const res = await fetch("https://jsonplaceholder.typicode.com/todos");
			const data = await res.json();
			setTodos(data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchTodos();
	}, []);

	function handleChangeCheckbox(id: number) {
		setTodos((prevTodos) => {
			return prevTodos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, completed: !todo.completed };
				}
				return todo;
			});
		});
	}

	if (todos.length === 0) {
		return <EmptyList text="Hay 0 TO-DO's" />;
	}

	return (
		<ul>
			{todos.map((todo) => (
				<TodoContainer todo={todo} onCheck={handleChangeCheckbox} />
			))}
		</ul>
	);
}

interface EmptyListProps {
	text: string;
}
function EmptyList({ text }: EmptyListProps) {
	return <div>{text}...</div>;
}

interface TodoContainerProps {
	todo: Todo;
	onCheck: (id: number) => void;
}

function TodoContainer({ todo, onCheck }: TodoContainerProps) {
	return (
		<li>
			<input
				type='checkbox'
				onChange={() => onCheck(todo.id)}
				checked={todo.completed}
			/>
			{todo.title}
		</li>
	);
}
