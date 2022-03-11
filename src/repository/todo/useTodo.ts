import { db } from "@config/firebase";
import { getExpireDate } from "@lib/getExpireDate";
import type { Todo } from "@models/Todo";
import { TodoDefault } from "@models/Todo";
import { todoCollection } from "@repo/todo/todoCollection";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useRouter } from "next/router";

type TodoActions = {
  onCreate: (expire: string, value: string) => Promise<void>;
  onUpdate: (todoId: string, value: Partial<Todo>) => Promise<void>;
  onDelete: (todoId: string) => Promise<void>;
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
    try {
      await addDoc(collection(db, todoCollection(userId as string)), data);
    } catch (error) {
      console.error("Error : ", error);
    }
  };

  const onUpdate = async (id: string, value: Partial<Todo>) => {
    try {
      await updateDoc(doc(db, todoCollection(userId as string), id), value);
    } catch (error) {
      console.error("Error : ", error);
    }
  };

  const onDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, todoCollection(userId as string), id));
    } catch (error) {
      console.error("Error : ", error);
    }
  };

  return {
    onCreate,
    onUpdate,
    onDelete,
  };
};
