import { PostPanel } from "@component/Panel/PostPanel";
import { TodoList } from "@component/TodoList";
import { db } from "config/firebase";
import type { FirestoreError } from "firebase/firestore";
import { DocumentData, orderBy, query } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { useRouter } from "next/router";
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import type { TodoListType } from "src/models/Todo";
import { todoCollection } from "src/repository/todo/todoCollection";

export const FirestoreCollection = (): {
  // TODO: 不要なら削除
  // value: QuerySnapshot<DocumentData> | undefined;
  data: TodoListType[] | undefined;
  loading: boolean;
  error: FirestoreError | undefined;
} => {
  const { userId } = useRouter().query;
  const [value, loading, error] = useCollection(
    query(
      collection(db, todoCollection(userId as string)),
      orderBy("expire", "asc")
    )
  );

  const data = value?.docs.map((d) => {
    const { name, expire, isFinished, isDeleted } = d.data();
    return {
      todoId: d.id,
      todoData: { name, expire: expire.toDate(), isFinished, isDeleted },
    };
  });

  return { data, loading, error };
};

export const Index = () => {
  const { data } = FirestoreCollection();

  return (
    <>
      <main className="mx-auto mb-8 w-full min-w-[300px] max-w-[600px]">
        <TodoList todoList={data} />
      </main>
      <PostPanel />
    </>
  );
};
