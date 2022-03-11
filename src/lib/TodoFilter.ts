import type { DocumentData } from "firebase/firestore";
import type { TodoListType } from "src/models/Todo";

export const TodoFilter = (
  todoList: TodoListType[] | DocumentData[] | undefined,
  title: "today" | "upcoming" | "tomorrow"
) => {
  if (!todoList) {
    return [];
  }

  return todoList.filter((todo) => {
    const date = todo.todoData?.expire.toDate();
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
