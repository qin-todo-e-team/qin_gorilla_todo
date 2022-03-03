import { SettingLayout } from "@component/Layout/setting";
import { Theme } from "@component/Theme";
import React from "react";

export const Index: React.VFC = () => (
  <SettingLayout title={"テーマ"}>
    <Theme />
  </SettingLayout>
);
