import { collection, onSnapshot, query } from "firebase/firestore";
import type { VFC } from "react";
import { useEffect, useState } from "react";
import { TodoList } from "src/component/TodoList/TodoList";

import { db } from "../../../config/firebase";

//const todayList: string[] = ["Qin Todo", "A simple todo app", "by Qin", "hoge"];
const tomorrowList: string[] = ["Qin Todo", "A simple todo app", "by Qin"];
const nextList: string[] = ["Qin Todo", "A simple todo app", "by Qin"];

export const Index: VFC = () => {
  const [todayList, setTodayList] = useState<string[]>([]);
  useEffect(() => {
    const q = query(collection(db, "Todos"));
    onSnapshot(q, (querySnapshot) => {
      setTodayList(querySnapshot.docs.map((data) => data.data().name));
    });
  }, []);

  return (
    <>
      <TodoList
        todayList={todayList}
        tomorrowList={tomorrowList}
        nextList={nextList}
      />
    </>
  );
};
