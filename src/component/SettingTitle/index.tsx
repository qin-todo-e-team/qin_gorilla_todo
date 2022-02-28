import React from "react";

type Props = {
  title: string;
};

export const SettingTitle: React.VFC<Props> = ({ title }) => (
  <div className={"py-5 text-center border-b-2"}>
    <h1 className={"font-bold"}>{title}</h1>
  </div>
);
