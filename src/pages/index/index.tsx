import { PostPanel } from "@component/Panel/PostPanel";
import { TodoList } from "@component/TodoList/TodoList";
import type { VFC } from "react";
import { Todos } from "src/mock";

export const Index: VFC = () => (
  <>
    <TodoList todoList={Todos} />
    <PostPanel />
  </>
);

