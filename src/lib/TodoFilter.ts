import { TODO_CATEGORY } from "@constant/TodoCategory";
import type { DocumentData } from "firebase/firestore";

export const TodoFilter = (
  todoList: DocumentData[] | undefined,
  title: typeof TODO_CATEGORY[keyof typeof TODO_CATEGORY]
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
      case TODO_CATEGORY.TODAY:
        return date.getDate() <= new Date().getDate();
      case TODO_CATEGORY.TOMORROW:
        return date.getDate() === new Date().getDate() + 1;
      case TODO_CATEGORY.UPCOMING:
        return date.getDate() >= new Date().getDate() + 2;
      default:
        return false;
    }
  });
};
