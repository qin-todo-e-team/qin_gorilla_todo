import { RadioButton } from "@component/RadioButton";
import cc from "classcat";
import { useState } from "react";
import type { Todo } from "src/models/Todo";

type Props = {
  title: "today" | "upcoming" | "tomorrow" | undefined;
  todoList: Todo[];
  children?: React.ReactNode;
};

type ListItem = {
  label: string;
  color: string;
  bg: string;
};

type ThemeListType = {
  today: ListItem;
  tomorrow: ListItem;
  upcoming: ListItem;
};

const ThemeLists: ThemeListType = {
  today: {
    label: "今日する",
    color: "text-rose-500",
    bg: "bg-rose-500",
  },
  tomorrow: {
    label: "明日する",
    color: "text-orange-400",
    bg: "bg-orange-400",
  },
  upcoming: {
    label: "今度する",
    color: "bg-amber-400",
    bg: "bg-amber-400",
  },
};

export const CheckBox = ({ todoList, title }: Props) => {
  const [isFinishedList, setIsFinishedList] = useState<boolean[]>(
    todoList.map((todo) => todo.isFinished)
  );
  const handleFinished = (index: number) => {
    const newArray: boolean[] = isFinishedList.map((flag, i) =>
      index === i ? !flag : flag
    );
    setIsFinishedList(newArray);
  };

  const { label, color, bg } = ThemeLists[title ?? "today"];

  return (
    <>
      <div className="mb-8">
        <h1 className={cc(["p-2 text-xl font-bold", color])}>{label}</h1>
        <div>
          <div className="flex flex-col">
            {todoList.map((todo, index) => (
              <div key={index} className="flex items-center p-2 ">
                <RadioButton
                  color={bg}
                  isSelected={isFinishedList[index]}
                  handleSelected={() => handleFinished(index)}
                />
                <div
                  className={cc([
                    "ml-2 text-lg",
                    {
                      "text-gray-500 line-through ":
                        isFinishedList[index] === true,
                    },
                  ])}
                >
                  {todo.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
