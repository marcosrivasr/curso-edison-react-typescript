import type { Todos } from "./Todos";
import { createStore } from "satcheljs";
import "../mutators/addMutator";
import "../mutators/completeTodoMutator";

const getStore = createStore<Todos>("todoStore", { todos: [] });
export default getStore;
