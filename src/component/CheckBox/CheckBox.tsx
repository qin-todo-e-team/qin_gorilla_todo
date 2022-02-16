import { useState } from "react";

type Props = {
  label: string;
  color: string;
  backgroundColor: string;
  todoList?: string[];
};

const classNames = (...classes: string[]) => classes.filter(Boolean).join(" ");

export const CheckBox = ({
  backgroundColor,
  color,
  label,
  todoList,
}: Props) => {
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
