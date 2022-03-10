import { SettingLayout } from "@component/Layout/setting";
import { Profile } from "@component/Profile";
import React from "react";

export const Index: React.VFC = () => (
  <SettingLayout title={"プロフィール"}>
    <Profile />
  </SettingLayout>
);
