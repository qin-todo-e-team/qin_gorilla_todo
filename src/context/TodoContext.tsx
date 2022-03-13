import type { DocumentData } from "firebase/firestore";
import type { Dispatch } from "react";
import React, { createContext, useContext, useEffect, useState } from "react";

type TodoContextProps = {
  currentTodo: DocumentData | undefined;
  setCurrentTodo: Dispatch<DocumentData>;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const TodoContext = createContext<TodoContextProps>({});

export const useTodoContext = () => useContext(TodoContext);

type ProviderProps = {
  children: React.ReactNode;
};
export const TodoProvider: React.VFC<ProviderProps> = ({ children }) => {
  const [currentTodo, setCurrentTodo] = useState<DocumentData | undefined>(
    undefined
  );

  const values = {
    currentTodo,
    setCurrentTodo,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};
