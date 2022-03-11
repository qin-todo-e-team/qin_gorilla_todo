import { SettingTitle } from "@component/SettingTitle";
import React from "react";

type Props = {
  children: React.ReactNode;
  title: string;
};

export const SettingLayout: React.VFC<Props> = ({ children, title }) => (
  <div>
    <SettingTitle title={title} />
    <div className={"mx-auto max-w-screen-md"}>{children}</div>
  </div>
);
