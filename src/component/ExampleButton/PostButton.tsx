import cc from "classcat";
import React from "react";

type PostButtonPropsType = {
  type?: "today" | "upcoming" | "tommorow" | undefined;
  onClick?: () => void | undefined;
};

type PostOption = {
  title: string;
  color: string;
};

type PostItemType = {
  today: PostOption;
  tommorow: PostOption;
  upcoming: PostOption;
};

const PostItem: PostItemType = {
  today: { title: "＋ 今日する", color: "red" },
  tommorow: { title: "＋ 明日する", color: "orange" },
  upcoming: { title: "＋ 今度する", color: "yellow" },
};

export const PostButton = (props: PostButtonPropsType) => {
  const { onClick, type } = props;
  const { color, title } = PostItem[type || "today"];
  return (
    <button
      className={cc([
        "rounded-full text-xs w-[104px] h-[36px] text-white",
        {
          "bg-[#f43f5e]": color === "red",
          "bg-[#fb923c]": color === "orange",
          "bg-[#fbbf24]": color === "yellow",
        },
      ])}
      onClick={onClick}
      data-type={type}
    >
      {title}
    </button>
  );
};
