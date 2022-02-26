import { db } from "@config/firebase";
import cc from "classcat";
import { addDoc, collection } from "firebase/firestore";
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

type PostDataType = {
  expireDate: Date;
  name: string;
  isDeleted: boolean;
  isFinished: boolean;
};

// TODO: カスタムフックに分離するか検討中
const postTaskData = async (expire: string, value: string) => {
  const getExpireDate = (expire: string) => {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    const upcoming = new Date(now);
    upcoming.setDate(now.getDate() + 9999); // TODO: 仮で9999日後に設定
    switch (expire) {
      case "today":
        return now;
      case "tomorrow":
        return tomorrow;
      case "upcoming":
        return upcoming;
      default:
        return now;
    }
  };
  const data: PostDataType = {
    expireDate: getExpireDate(expire),
    name: value ?? "",
    isDeleted: false,
    isFinished: false,
  };
  await addDoc(collection(db, "Todos"), data);
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

  const handleSubmit = async (typeString: string) => {
    onSubmit &&
      onSubmit({
        type: typeString || "",
        value: textboxValue || "",
      });
    postTaskData(typeString, textboxValue);
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
