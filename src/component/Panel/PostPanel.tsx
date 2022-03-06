import { useColorModeValue } from "@chakra-ui/react";
import { useTodo } from "@repo/todo/useTodo";
import cc from "classcat";
import React, { useState } from "react";

import { PostButton } from "./PostButton";
import { PostTextBox } from "./PostTextBox";

export const PostPanel: React.VFC = () => {
  const [input, setInput] = useState<string>("");
  const { onCreate } = useTodo();
  const bg = useColorModeValue("bg-white", "bg-[#1A202C]");

  // TODO: テキストボックスに入力された値を返すイベント（不要の場合削除）
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value || "");
  };

  const handleSubmit = async (type: string) => {
    await onCreate(type, input);
    setInput("");
  };

  return (
    <div
      className={cc(["fixed bottom-0 left-0 py-2 mx-auto w-full h-auto", bg])}
    >
      <div className="group w-full">
        <div className="group flex justify-center mb-2 space-x-2 w-full">
          <PostTextBox value={input ?? ""} onChange={handleChange} />
        </div>
        <div
          className={cc([
            "flex justify-center mb-2 space-x-2 w-full transition",
            { hidden: !input },
          ])}
        >
          <PostButton
            title="today"
            onClickHandler={() => handleSubmit("today")}
          >
            ＋ 今日する
          </PostButton>
          <PostButton
            title="tomorrow"
            onClickHandler={() => handleSubmit("tomorrow")}
          >
            ＋ 明日する
          </PostButton>
          <PostButton
            title="upcoming"
            onClickHandler={() => handleSubmit("upcoming")}
          >
            ＋ いつかする
          </PostButton>
        </div>
      </div>
    </div>
  );
};
