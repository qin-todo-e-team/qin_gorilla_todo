import { PostPanel } from "@component/Panel/PostPanel";
import { TodoList } from "@component/TodoList/TodoList";
import { db } from "config/firebase";
import type {
  DocumentData,
  FirestoreError,
  QuerySnapshot,
} from "firebase/firestore";
import { collectionGroup } from "firebase/firestore";
import React, { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { todoCollection } from "src/repository/todo/todoCollection";

export const FirestoreCollection = (
  Todos: string
): {
  value: QuerySnapshot<DocumentData> | undefined;
  loading: boolean;
  error: FirestoreError | undefined;
} => {
  const [value, loading, error] = useCollection(
    collectionGroup(db, todoCollection("1")),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  return { value, loading, error };
};

const nextList: string[] = ["Qin Todo", "A simple todo app", "by Qin"];

export const Index = () => {
  const [nextToDoList, setNextToDoList] = useState(nextList);
  const { value } = FirestoreCollection("Todos");
  const todayList = value?.docs.map((doc) => doc.data().name) ?? [];
  const tomorrowList = value?.docs.map((doc) => doc.data().name) ?? [];

  return (
    <>
      {/* <TodoList
        todayList={todayList}
        tomorrowList={tomorrowList}
        nextList={nextToDoList}
      />
      <PostPanel
        onSubmit={(data) => {
          setNextToDoList((prev) => [...prev, data.value]);
        }}
      /> */}
    </>
  );
};
