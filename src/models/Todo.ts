export type Todo = {
  name: string;
  // FIX expire firebaseを入れたら型をtimestampに変更
  expire?: Date;
  isFinished: boolean;
  isDeleted: boolean;
};

export type TodoListType = {
  todoId: string;
  todoData: Todo;
};

export const TodoDefault = {
  name: "未入力",
  isFinished: false,
  isDeleted: false,
};
