import React from "react";

type Props = {
  children: React.ReactNode;
};

export const SelectRow: React.VFC<Props> = ({ children }) => (
  <li>
    <button className="flex justify-between w-full">
      <div className="py-2 font-bold text-left">{children}</div>
      <div className="py-2 font-bold text-right text-gray-300">&gt;</div>
    </button>
  </li>
);
