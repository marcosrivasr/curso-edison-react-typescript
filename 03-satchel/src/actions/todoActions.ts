import { action } from "satcheljs";

export const addTodo = action("addTodo", (text: string) => ({ text }));
export const completeTodo = action("addTodo", (id: string) => ({ id }));
