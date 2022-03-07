import { SettingLayout } from "@component/Layout/setting";
import { MyPage } from "@component/MyPage";
import type { NextPage } from "next";

const Index: NextPage = () => (
  <SettingLayout title="アカウント">
    <MyPage />
  </SettingLayout>
);

export default Index;
