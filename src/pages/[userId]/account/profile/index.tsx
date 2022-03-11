import { SettingLayout } from "@component/Layout/setting";
import { Profile } from "@component/Profile";
import React from "react";
import { Toaster } from "react-hot-toast";

export const Index: React.VFC = () => (
  <SettingLayout title={"プロフィール"}>
    <Profile />
    <Toaster />
  </SettingLayout>
);
