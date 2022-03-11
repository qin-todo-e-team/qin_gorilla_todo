import { SettingLayout } from "@component/Layout/setting";
import { Theme } from "@component/Theme";
import React from "react";
import { Toaster } from "react-hot-toast";

export const Index: React.VFC = () => (
  <SettingLayout title={"テーマ"}>
    <Theme />
    <Toaster />
  </SettingLayout>
);
