import { PostPanel } from "@component/Panel/PostPanel";
import { TodoList } from "@component/TodoList";
import { TodoProvider } from "@context/TodoContext";
import { db } from "config/firebase";
import type { DocumentData, FirestoreError } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { useRouter } from "next/router";
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { Toaster } from "react-hot-toast";
import { todoCollection } from "src/repository/todo/todoCollection";

export const FirestoreCollection = (): {
  // TODO: 不要なら削除
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

  const data = value?.docs.map((d) => {
    return { todoId: d.id, todoData: d.data() };
  });

  return { data, loading, error };
};

export const Index = () => {
  const { data } = FirestoreCollection();

  return (
    <>
      <TodoProvider>
        <main className="mx-auto mb-8 w-full min-w-[300px] max-w-[600px]">
          <TodoList todoList={data} />
        </main>
        <PostPanel />
      </TodoProvider>
      <Toaster />
    </>
  );
};
