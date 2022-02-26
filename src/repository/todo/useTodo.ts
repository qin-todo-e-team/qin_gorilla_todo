import { db } from "@config/firebase";
import type { Todo } from "@models/Todo";
import { todoCollection } from "@repo/todo/todoCollection";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/router";

type TodoActions = {
  onCreate: (expire: string, value: string) => Promise<void>;
};

const getExpireDate = (expire: string) => {
  const now = new Date();
  switch (expire) {
    case "today":
      return now;
    case "tomorrow":
      const tomorrow = new Date(now);
      tomorrow.setDate(now.getDate() + 1);
      return tomorrow;
    case "upcoming":
      const upcoming = new Date(now);
      upcoming.setDate(now.getDate() + 9999); // TODO: 仮で9999日後に設定
      return upcoming;
    default:
      return now;
  }
};

export const useTodo = (): TodoActions => {
  const { userId } = useRouter().query;
  const onCreate = async (expire: string, value: string) => {
    const data: Todo = {
      expire: getExpireDate(expire),
      name: value ?? "",
      isDeleted: false,
      isFinished: false,
    };
    await addDoc(collection(db, todoCollection(userId as string)), data);
  };

  return {
    onCreate,
  };
};
