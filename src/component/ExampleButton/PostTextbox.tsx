import cc from "classcat";
import React from "react";

type PostTextboxPropsType = {
  value: string;
  onChange?: () => void | undefined;
};

export const PostTextbox = (props: PostTextboxPropsType) => {
  const { onChange, value } = props;
  return (
    <input
      type="text"
      className={cc([
        "w-[327px] h-[36px] px-[16px] py-[10px] rounded-[16px]",
        "placeholder-[#c2c6d2] bg-[#f1f5f9] border-0 text-xs text-black",
        "focus:ring-0 focus:caret-rose-500 focus:border focus:border-rose-500 focus:shadow focus:shadow-rose-300/50",
        {},
      ])}
      onChange={() => {
        onChange;
      }}
      placeholder="タスクを入力する"
      value={value}
    />
  );
};
