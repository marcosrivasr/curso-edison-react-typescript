import { mutator } from "satcheljs";
import { completeTodo } from "../actions/todoActions";
import getStore from "../store/store";

mutator(completeTodo, (actionMessage) => {
	const todo = getStore().todos.find((todo) => todo.id === actionMessage.id);
	if (todo) {
		todo.completed = !todo.completed;
	}
});
