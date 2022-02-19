import { Theme } from "@component/theme";
import type { NextPage } from "next";

import { SettingLayout } from "../../../layout/setting";

const Index: NextPage = () => (
  <SettingLayout title={"テーマ"}>
    <Theme />
  </SettingLayout>
);

export default Index;
