import { PostPanel } from "@component/Panel/PostPanel";
import { TodoList } from "@component/TodoList/TodoList";
import { getDate, getMonth, getYear } from "date-fns";
import type {
  DocumentData,
  FirestoreError,
  QuerySnapshot,
  Timestamp,
} from "firebase/firestore";
import { collectionGroup } from "firebase/firestore";
import type { VFC } from "react";
import React, { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";

import { db } from "../../../config/firebase";

export const FirestoreCollection = (
  Todos: string
): {
  value: QuerySnapshot<DocumentData> | undefined;
  loading: boolean;
  error: FirestoreError | undefined;
} => {
  const [value, loading, error] = useCollection(collectionGroup(db, Todos), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  return { value, loading, error };
};

const nextList: string[] = ["Qin Todo", "A simple todo app", "by Qin"];

export const Index: VFC = () => {
  const [date, setDate] = useState<Date[]>();
  const [nextToDoList, setNextToDoList] = useState(nextList);
  const { value } = FirestoreCollection("Todos");

  const todayList = value?.docs.map((doc) => doc.data().name) ?? [];
  const tomorrowList = value?.docs.map((doc) => doc.data().name) ?? [];

  useEffect(() => {
    const timestamp: Date[] =
      value?.docs.map((doc) => doc.data().expireDate.toDate()) ?? [];
    setDate(timestamp);
  }, [value]);

  const aaa = () => {
    console.log(date?.[0].getFullYear());
    const today = new Date();
    today.setDate(today.getDate() + 1);
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(-1);
    console.log(today);
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    tomorrow.setHours(0);
    tomorrow.setMinutes(0);
    tomorrow.setSeconds(0);
    console.log(tomorrow);
  };

  return (
    <>
      <button onClick={aaa}>button</button>
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
