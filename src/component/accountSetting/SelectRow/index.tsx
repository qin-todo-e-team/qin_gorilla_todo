import React from "react";

type Props = {
  children: React.ReactNode;
  onOpen: () => void;
};

export const SelectRow: React.VFC<Props> = ({ children, onOpen }) => (
  <div>
    <li>
      <button
        className="py-2 w-full font-bold text-left text-rose-500"
        onClick={onOpen}
      >
        {children}
      </button>
    </li>
  </div>
);
