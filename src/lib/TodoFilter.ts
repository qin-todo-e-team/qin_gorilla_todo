import type { DocumentData } from "firebase/firestore";

export const TodoFilter = (
  todoList: DocumentData[] | undefined,
  title: "today" | "upcoming" | "tomorrow"
) => {
  if (!todoList) {
    return [];
  }
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  const dayAfterTomorrow = new Date();
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);
  dayAfterTomorrow.setHours(0, 0, 0, 0);

  return todoList.filter((todo) => {
    const date = todo.todoData?.expire.toDate();
    if (!date) {
      return false;
    }
    switch (title) {
      case "today":
        return date.getTime() < tomorrow.getTime();
      case "tomorrow":
        return (
          tomorrow.getTime() <= date.getTime() &&
          date.getTime() < dayAfterTomorrow.getTime()
        );
      case "upcoming":
        return date.getTime() >= dayAfterTomorrow.getTime();
      default:
        return false;
    }
  });
};
