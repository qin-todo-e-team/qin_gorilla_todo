import { TodoList } from "@component/TodoList/TodoList";
import type { VFC } from "react";
import { Todos } from "src/mock";

export const Index: VFC = () => (
  <>
    <TodoList todayList={Todos} tomorrowList={Todos} upcomingList={Todos} />
  </>
);
