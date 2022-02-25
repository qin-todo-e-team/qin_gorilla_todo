import cc from "classcat";
import React, { useState } from "react";

import { PostButton } from "./PostButton";
import { PostTextBox } from "./PostTextBox";

type PostPanelSubmitType = {
  type: string;
  value: string;
};

type PostPanelPropsType = {
  onSubmit: (data: PostPanelSubmitType) => void;
  onChange?: (value: string | undefined) => void; // TODO: テキストボックスに入力された値を返すイベント（不要であれば削除します）
  value?: string;
};

export const PostPanel: React.VFC<PostPanelPropsType> = ({
  onChange,
  onSubmit, // TODO: テキストボックスに入力された値を返すイベント（不要であれば削除します）
  value,
}: PostPanelPropsType) => {
  const [textboxValue, setTextboxValue] = useState<string>(value ?? "");

  // TODO: テキストボックスに入力された値を返すイベント（不要の場合削除）
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextboxValue(e.target.value || "");
    onChange && onChange(textboxValue);
  };

  const handleSubmit = (typeString: string) => {
    onSubmit &&
      onSubmit({
        type: typeString || "",
        value: textboxValue || "",
      });
    setTextboxValue("");
  };
  return (
    <div className="fixed bottom-0 left-0 py-2 mx-auto w-full h-auto bg-white">
      <div className="group w-full">
        <div className="group flex justify-center mb-2 space-x-2 w-full">
          <PostTextBox value={textboxValue ?? ""} onChange={handleChange} />
        </div>
        <div
          className={cc([
            "flex justify-center mb-2 space-x-2 w-full transition",
            { hidden: !textboxValue },
          ])}
        >
          <PostButton
            type="today"
            onClick={() => {
              handleSubmit("today");
            }}
          />
          <PostButton
            type="tomorrow"
            onClick={() => {
              handleSubmit("tomorrow");
            }}
          />
          <PostButton
            type="upcoming"
            onClick={() => {
              handleSubmit("upcoming");
            }}
          />
        </div>
      </div>
    </div>
  );
};
