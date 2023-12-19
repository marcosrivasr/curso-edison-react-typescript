import loadData from "./loadData";

interface TodosComponentProps {
  data: any;
}
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function TodosComponent({ data }: TodosComponentProps) {
  return (data as Todo[]).map((item) => <div key={item.id}>{item.title}</div>);
}

export default function Hoc() {
  const Todos = loadData(
    TodosComponent,
    "https://jsonplaceholder.typicode.com/todos"
  );

  return <Todos />;
}
