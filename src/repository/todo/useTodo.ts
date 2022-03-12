import { db } from "@config/firebase";
import { getExpireDate } from "@lib/getExpireDate";
import type { Todo } from "@models/Todo";
import { TodoDefault } from "@models/Todo";
import { useToast } from "@repo/toast/useToast";
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
  const { successToast, errorToast } = useToast();

  const onCreate = async (expireDateType: string, value: string) => {
    const data: Todo = {
      expire: getExpireDate(expireDateType),
      name: value ?? "",
      isDeleted: TodoDefault.isDeleted,
      isFinished: TodoDefault.isFinished,
    };
    try {
      await addDoc(collection(db, todoCollection(userId as string)), data);
      successToast("Todoを追加しました");
    } catch (error) {
      errorToast("Todoの追加に失敗しました");
    }
  };

  const onUpdate = async (id: string, value: Partial<Todo>) => {
    try {
      await updateDoc(doc(db, todoCollection(userId as string), id), value);
      successToast("Todoを更新しました");
    } catch (error) {
      errorToast("Todoの更新に失敗しました");
    }
  };

  const onDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, todoCollection(userId as string), id));
      successToast("Todoを削除しました");
    } catch (error) {
      errorToast("Todoの削除に失敗しました");
    }
  };

  return {
    onCreate,
    onUpdate,
    onDelete,
  };
};
