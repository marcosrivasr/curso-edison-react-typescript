export interface Todo {
	id: string;
	text: string;
	completed: boolean;
}
export interface Todos {
	todos: Array<Todo>;
}
