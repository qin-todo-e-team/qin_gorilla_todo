import {
  useGetThemeSetting,
  useTheme as useThemeSetting,
} from "@repo/theme/useTheme";
import { useTheme } from "next-themes";
import React from "react";

type Props = {
  children: React.ReactNode;
  type: string;
};

export const SelectRow: React.VFC<Props> = ({ children, type }) => {
  const { selectedTheme } = useGetThemeSetting();
  const { onCreate } = useThemeSetting();
  const { theme, setTheme } = useTheme();

  const clickHandler = async () => {
    setTheme(type);
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
