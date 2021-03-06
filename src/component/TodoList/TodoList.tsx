import type { DocumentData } from "firebase/firestore";
import { CheckBox } from "src/component/CheckBox/CheckBox";
import { TodoFilter } from "src/lib/TodoFilter";

type Props = {
  todoList: DocumentData[] | undefined;
};

export const TodoList = ({ todoList }: Props) => (
  <>
    <div className="py-2 px-4">
      <CheckBox todoList={TodoFilter(todoList, "today")} title="today" />
      <CheckBox todoList={TodoFilter(todoList, "tomorrow")} title="tomorrow" />
      <CheckBox todoList={TodoFilter(todoList, "upcoming")} title="upcoming" />
    </div>
  </>
);
