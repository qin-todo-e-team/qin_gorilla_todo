import { useGetThemeSetting, useTheme } from "@repo/theme/useTheme";
import React from "react";

type Props = {
  children: React.ReactNode;
  type: string;
};

export const SelectRow: React.VFC<Props> = ({ children, type }) => {
  const { onCreate } = useTheme();
  const { selectedTheme } = useGetThemeSetting();

  const clickHandler = async () => {
    await onCreate(type);
  };

  return (
    <li className={"flex items-center w-full"}>
      <button className={"py-2 w-full text-left"} onClick={clickHandler}>
        {children}
      </button>
      <div>{selectedTheme && selectedTheme === type ? "✔︎" : ""}</div>
    </li>
  );
};
