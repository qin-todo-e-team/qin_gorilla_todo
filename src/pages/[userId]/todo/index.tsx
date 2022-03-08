import { PostPanel } from "@component/Panel/PostPanel";
import { TodoList } from "@component/TodoList/TodoList";
import React, { useState } from "react";
import { Todos } from "src/mock";

const nextList: string[] = ["Qin Todo", "A simple todo app", "by Qin"];

export const Index: React.VFC = () => {
  // TODO: nextToDoListはfirebaseと連携出来次第削除します。
  const [nextToDoList, setNextToDoList] = useState(nextList);
  return (
    <>
      <TodoList todayList={Todos} tomorrowList={Todos} upcomingList={Todos} />
      <PostPanel />
    </>
  );
};
