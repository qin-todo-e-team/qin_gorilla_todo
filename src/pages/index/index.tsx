import type { VFC } from "react";
import { useState } from "react";

const todayList: string[] = ["Qin Todo", "A simple todo app", "by Qin", "hoge"];
const tomorrowList: string[] = ["Qin Todo", "A simple todo app", "by Qin"];
const nextList: string[] = ["Qin Todo", "A simple todo app", "by Qin"];

export type Props = {
  label: string;
  color: string;
  backgroundColor: string;
  todoList?: string[];
};

type DeadLine = {
  todayList: string[];
  tomorrowList: string[];
  nextList: string[];
};

const classNames = (...classes: string[]) => classes.filter(Boolean).join(" ");

const Todo = ({ backgroundColor, color, label, todoList }: Props) => {
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const handleIsFinished = () => {
    setIsFinished((prev) => !prev);
  };

  return (
    <>
      <div className="mb-8">
        <h1 className={`p-2 text-xl ${color}`}>{label}</h1>

        {todoList &&
          todoList.map((item, index) => (
            <div key={index} className="flex items-center">
              <button
                title="taskButton"
                className={classNames(
                  "p-2 m-2 border-2 border-gray-200 rounded-full",
                  isFinished ? backgroundColor : "bg-white"
                )}
                onClick={handleIsFinished}
              />
              <div
                className={
                  isFinished ? "text-gray-500 line-through" : "text-base"
                }
              >
                {item}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export const TodoIndex = ({ nextList, todayList, tomorrowList }: DeadLine) => (
  <>
    <div className="py-2 px-4">
      <Todo
        color="text-rose-500"
        backgroundColor="bg-rose-500"
        label="今日する"
        todoList={todayList}
      />
      <Todo
        color="text-orange-400"
        backgroundColor="bg-orange-400"
        label="明日する"
        todoList={tomorrowList}
      />
      <Todo
        color="text-amber-400"
        backgroundColor="bg-amber-400"
        label="今度する"
        todoList={nextList}
      />
    </div>
  </>
);

export const Index: VFC = () => (
  <>
    <TodoIndex
      todayList={todayList}
      tomorrowList={tomorrowList}
      nextList={nextList}
    />
  </>
);
