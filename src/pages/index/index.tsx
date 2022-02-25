import { PostPanel } from "@component/Panel/PostPanel";
import { TodoList } from "@component/TodoList/TodoList";
import type { VFC } from "react";
import React, { useState } from "react";

const todayList: string[] = ["Qin Todo", "A simple todo app", "by Qin", "hoge"];
const tomorrowList: string[] = ["Qin Todo", "A simple todo app", "by Qin"];
const nextList: string[] = ["Qin Todo", "A simple todo app", "by Qin"];

export const Index: VFC = () => {
  const [nextToDoList, setNextToDoList] = useState(nextList);
  return (
    <>
      <TodoList
        todayList={todayList}
        tomorrowList={tomorrowList}
        nextList={nextToDoList}
      />
      <PostPanel
        onSubmit={(data) => {
          setNextToDoList((prev) => [...prev, data.value]);
        }}
      />
    </>
  );
};
