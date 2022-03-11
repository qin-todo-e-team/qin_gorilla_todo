import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
  url: string;
};

export const SelectRow: React.VFC<Props> = ({ children, url }) => (
  <li>
    <Link href={url}>
      <a className="flex justify-between w-full">
        <div className="py-2 font-bold text-left">{children}</div>
        <div className="py-2 font-bold text-right text-gray-300">&gt;</div>
      </a>
    </Link>
  </li>
);
