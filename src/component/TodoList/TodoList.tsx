import type { DocumentData } from "firebase/firestore";
import { CheckBoxList } from "src/component/CheckBox/";
import { TodoFilter } from "src/lib/TodoFilter";
import type { TodoListType } from "src/models/Todo";

type Props = {
  todoList: TodoListType[] | undefined;
};

export const TodoList = ({ todoList }: Props) => (
  <>
    <div className="py-2 px-4">
      <CheckBoxList todoList={TodoFilter(todoList, "today")} title="today" />
      <CheckBoxList
        todoList={TodoFilter(todoList, "tomorrow")}
        title="tomorrow"
      />
      <CheckBoxList
        todoList={TodoFilter(todoList, "upcoming")}
        title="upcoming"
      />
    </div>
  </>
);
