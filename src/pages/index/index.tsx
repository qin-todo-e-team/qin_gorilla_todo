import type { VFC } from "react";
import { PostPanel } from "src/component/Panel/PostPanel";
import { TodoList } from "src/component/TodoList";

const todayList: string[] = ["Qin Todo", "A simple todo app", "by Qin", "hoge"];
const tomorrowList: string[] = ["Qin Todo", "A simple todo app", "by Qin"];
const nextList: string[] = ["Qin Todo", "A simple todo app", "by Qin"];

export const Index: VFC = () => (
  <>
    <TodoList
      todayList={todayList}
      tomorrowList={tomorrowList}
      nextList={nextList}
    />
    <PostPanel />
  </>
);
