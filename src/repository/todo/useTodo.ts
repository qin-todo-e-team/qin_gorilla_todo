import { db } from "@config/firebase";
import { getExpireDate } from "@lib/getExpireDate";
import type { Todo } from "@models/Todo";
import { TodoDefault } from "@models/Todo";
import { todoCollection } from "@repo/todo/todoCollection";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/router";

type TodoActions = {
  onCreate: (expire: string, value: string) => Promise<void>;
};

export const useTodo = (): TodoActions => {
  const { userId } = useRouter().query;

  const onCreate = async (expireDateType: string, value: string) => {
    const data: Todo = {
      expire: getExpireDate(expireDateType),
      name: value ?? "",
      isDeleted: TodoDefault.isDeleted,
      isFinished: TodoDefault.isFinished,
    };
    await addDoc(collection(db, todoCollection(userId as string)), data);
  };

  return {
    onCreate,
  };
};
