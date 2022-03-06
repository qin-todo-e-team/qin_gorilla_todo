import { Account } from "@component/accountSetting";
import { SettingLayout } from "@component/Layout/setting";
import type { NextPage } from "next";

const Index: NextPage = () => (
  <SettingLayout title="アカウント設定">
    <Account />
  </SettingLayout>
);

export default Index;
