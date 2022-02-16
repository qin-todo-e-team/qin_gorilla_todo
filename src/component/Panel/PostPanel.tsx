import cc from "classcat";
import React, { useState } from "react";

import { PostTextBox } from "../ExampleButton/PostBox";
import { PostButton } from "../ExampleButton/PostButton";

type PostPanelSubmitType = {
  type: string;
  value: string;
};

type PostPanelPropsType = {
  onSubmit?: (data: PostPanelSubmitType) => void | undefined;
  onChange?: (value: string | undefined) => void | undefined;
  value?: string;
};

export const PostPanel: React.VFC<PostPanelPropsType> = ({
  onChange,
  onSubmit,
  value,
}: PostPanelPropsType) => {
  const [textboxValue, setTextboxValue] = useState<string>(value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextboxValue(e.target.value || "");
    onChange && onChange(textboxValue);
  };
  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement>,
    typeString: string
  ) => {
    onSubmit &&
      onSubmit({
        type: typeString || "",
        value: textboxValue || "",
      });
    setTextboxValue("");
  };
  return (
    <div className="fixed bottom-0 left-0 py-2 mx-auto w-full h-auto bg-white">
      <div className="group container w-full">
        <div className="group flex justify-center mb-2 space-x-2 w-full">
          <PostTextBox
            value={textboxValue ?? ""}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(event)
            }
          />
        </div>
        <div
          className={cc([
            "flex justify-center mb-2 space-x-2 w-full transition",
            { hidden: !textboxValue },
          ])}
        >
          <PostButton
            type="today"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              handleSubmit(event, "today");
            }}
          />
          <PostButton
            type="tomorrow"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              handleSubmit(event, "tomorrow");
            }}
          />
          <PostButton
            type="upcoming"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              handleSubmit(event, "upcoming");
            }}
          />
        </div>
      </div>
    </div>
  );
};
