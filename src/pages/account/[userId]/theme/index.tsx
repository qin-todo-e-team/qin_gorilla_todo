import { useColorMode } from "@chakra-ui/react";
import { SettingLayout } from "@component/Layout/setting";
import { Theme } from "@component/Theme";
import { useGetThemeSetting } from "@repo/theme/useTheme";
import React, { useEffect } from "react";

export const Index: React.VFC = () => {
  const { setColorMode } = useColorMode();
  const { selectedTheme } = useGetThemeSetting();

  useEffect(() => {
    setColorMode(selectedTheme);
  }, []);

  return (
    <SettingLayout title={"テーマ"}>
      <Theme />
    </SettingLayout>
  );
};
