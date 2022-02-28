import { RadioButton } from "@component/RadioButton";
import { useState } from "react";
import type { Todo } from "src/models/Todo";

type Props = {
  label: string;
  color: string;
  backgroundColor: string;
  todoList: Todo[];
};

export const CheckBox = ({
  backgroundColor,
  color,
  label,
  todoList,
}: Props) => {
  const [isFinished, setIsFinished] = useState<boolean[]>(
    todoList.map((todo) => todo.isFinished)
  );
  const handleFinished = (i: number) => {
    const newArray: boolean[] = isFinished.map((flag, index) =>
      i === index ? !flag : flag
    );
    setIsFinished(newArray);
  };

  return (
    <>
      <div className="mb-8">
        <h1 className={`p-2 text-xl font-bold ${color}`}>{label}</h1>
        <div>
          <div className="flex flex-col">
            {todoList.map((todo, index) => (
              <div key={index} className="flex items-center p-2">
                <RadioButton
                  color={backgroundColor}
                  isSelected={isFinished[index]}
                  handleSelected={() => handleFinished(index)}
                />
                <div
                  className={`ml-2 text-lg ${
                    isFinished[index]
                      ? "text-gray-500 line-through"
                      : "text-base"
                  }`}
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
