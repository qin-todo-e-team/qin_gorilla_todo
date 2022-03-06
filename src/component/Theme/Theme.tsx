import { themes } from "@models/Theme";
import React from "react";

import { SelectRow } from "./SelectRow";

export const Theme: React.VFC = () => (
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
