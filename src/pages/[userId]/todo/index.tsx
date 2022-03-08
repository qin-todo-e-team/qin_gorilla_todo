import { db } from "config/firebase";
import type { DocumentData, FirestoreError } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { todoCollection } from "src/repository/todo/todoCollection";

export const FirestoreCollection = (
  Todos: string
): {
  // value: QuerySnapshot<DocumentData> | undefined;
  data: DocumentData[] | undefined;
  loading: boolean;
  error: FirestoreError | undefined;
} => {
  const { userId } = useRouter().query;
  const [value, loading, error] = useCollection(
    collection(db, todoCollection(userId as string)),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const data = value?.docs.map((d) => d.data());

  return { data, loading, error };
};

const nextList: string[] = ["Qin Todo", "A simple todo app", "by Qin"];

export const Index = () => {
  const [nextToDoList, setNextToDoList] = useState(nextList);
  const { data } = FirestoreCollection("Todos");
  // const todayList = value?.docs.map((doc) => doc.data().name) ?? [];
  // const tomorrowList = value?.docs.map((doc) => doc.data().name) ?? [];

  return (
    <>
      {data?.map((d) => (
        <div key={d.name}>{d.name}</div>
      ))}
      {/*<TodoList*/}
      {/*  todayList={todayList}*/}
      {/*  tomorrowList={tomorrowList}*/}
      {/*  nextList={nextToDoList}*/}
      {/*/>*/}
      {/*<PostPanel*/}
      {/*  onSubmit={(data) => {*/}
      {/*    setNextToDoList((prev) => [...prev, data.value]);*/}
      {/*  }}*/}
      {/*/>*/}
    </>
  );
};
