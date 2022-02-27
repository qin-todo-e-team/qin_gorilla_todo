import React from "react";

import { SelectRow } from "./SelectRow";

type TThemesTypes = {
  type: string;
  label: string;
};

const themes: TThemesTypes[] = [
  {
    type: "os",
    label: "OSの設定に合わせる",
  },
  {
    type: "light",
    label: "ライト",
  },
  {
    type: "dark",
    label: "ダーク",
  },
];

export const Theme: React.VFC = () => {
  return (
    <div className={"mt-8"}>
      <ul className={"px-5"}>
        {themes.map(({ label, type }) => (
          <SelectRow key={type} type={type}>
            {label}
          </SelectRow>
        ))}
      </ul>
    </div>
  );
};
