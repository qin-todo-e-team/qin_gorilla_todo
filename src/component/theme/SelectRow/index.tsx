import { useTheme } from "@repo/theme/useTheme";
import React from "react";

type Props = {
  children: React.ReactNode;
  type: string;
};

export const SelectRow: React.VFC<Props> = ({ children, type }) => {
  const { onCreate } = useTheme();

  const clickHandler = async () => {
    await onCreate(type);
  };

  return (
    <li>
      <button className={"py-2 w-full text-left"} onClick={clickHandler}>
        {children}
      </button>
    </li>
  );
};
