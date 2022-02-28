import { PostPanel } from "@component/Panel/PostPanel";
import { TodoList } from "@component/TodoList/TodoList";
import type { VFC } from "react";
import React, { useState } from "react";
import { Todos } from "src/mock";

const nextList: string[] = ["Qin Todo", "A simple todo app", "by Qin"];

export const Index: VFC = () => {
  const [nextToDoList, setNextToDoList] = useState(nextList);
  return (
    <>
      <TodoList todayList={Todos} tomorrowList={Todos} upcomingList={Todos} />
      <PostPanel
        onSubmit={(data) => {
          setNextToDoList((prev) => [...prev, data.value]);
        }}
      />
    </>
  );
};
