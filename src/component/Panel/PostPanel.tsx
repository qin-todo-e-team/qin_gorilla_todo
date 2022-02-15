import cc from "classcat";
import { useState } from "react";

import { PostButton } from "../ExampleButton/PostButton";
import { PostTextbox } from "../ExampleButton/PostTextbox";

type PostPanelSubmitType = {
  type: string | undefined;
  value: string;
};

type PostPanelPropsType = {
  onSubmit?: (data: PostPanelSubmitType) => void | undefined;
  onChange?: (value: string | undefined) => void | undefined;
  value?: string;
};

export const PostPanel = (props: PostPanelPropsType) => {
  const { onChange, onSubmit, value } = props;
  const [textboxValue, setTextboxValue] = useState(value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextboxValue(e.target.value || "");
    onChange && onChange(textboxValue);
  };
  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement>,
    typeString: string
  ) => {
    e.preventDefault();
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
          <PostTextbox
            value={textboxValue || ""}
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
            type="tommorow"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              handleSubmit(event, "tommorow");
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
