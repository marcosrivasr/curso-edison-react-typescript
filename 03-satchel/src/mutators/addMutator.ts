import { mutator } from "satcheljs";
import { addTodo } from "../actions/todoActions";
import getStore from "../store/store";

mutator(addTodo, (actionMessage) => {
	getStore().todos.push({
		id: crypto.randomUUID(),
		text: actionMessage.text,
		completed: false,
	});
});
