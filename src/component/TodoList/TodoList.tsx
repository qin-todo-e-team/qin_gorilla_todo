import type { DocumentData } from "firebase/firestore";
import { CheckBox } from "src/component/CheckBox/CheckBox";
import type { TodoListType } from "src/models/Todo";

type Props = {
  todoList: TodoListType[] | DocumentData[] | undefined;
};

const TodoFilter = (
  todoList: TodoListType[] | DocumentData[] | undefined,
  title: "today" | "upcoming" | "tomorrow" | undefined
) => {
  if (!todoList) {
    return [];
  }

  return todoList.filter((todo) => {
    const date = todo.todoData.expire.toDate();
    if (!date) {
      return false;
    }
    switch (title) {
      case "today":
        return date.getDate() <= new Date().getDate();
      case "tomorrow":
        return date.getDate() === new Date().getDate() + 1;
      case "upcoming":
        return date.getDate() >= new Date().getDate() + 2;
      default:
        return false;
    }
  });
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
