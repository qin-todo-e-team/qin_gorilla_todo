import cc from "classcat";
import React from "react";

type PostItem = {
  title: string;
  onClickHandler: () => void;
  children: React.ReactNode;
};

export const PostButton: React.VFC<PostItem> = ({
  title,
  onClickHandler,
  children,
}) => (
  <button
    className={cc([
      "rounded-full text-xs w-[104px] h-[36px] text-white",
      {
        "bg-[#f43f5e]": title === "today",
        "bg-[#fb923c]": title === "tomorrow",
        "bg-[#fbbf24]": title === "upcoming",
      },
    ])}
    onClick={onClickHandler}
  >
    {children}
  </button>
);
