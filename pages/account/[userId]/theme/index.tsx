import { SettingLayout } from "@component/Layout/setting";
import { Theme } from "@component/theme";
import type { NextPage } from "next";

const Index: NextPage = () => (
  <SettingLayout title={"テーマ"}>
    <Theme />
  </SettingLayout>
);

export default Index;
