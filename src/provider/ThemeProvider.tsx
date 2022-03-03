import { useColorMode } from "@chakra-ui/react";
import { useGetThemeSetting } from "@repo/theme/useTheme";
import React, { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider: React.VFC<Props> = ({ children }) => {
  // TODO userのパス登録されるようになったら、useContextからuserIdを取得し、そのパスでテーマを取得して変更するようにする
  const { setColorMode } = useColorMode();
  const { selectedTheme } = useGetThemeSetting();

  useEffect(() => {
    setColorMode(selectedTheme);
  }, [selectedTheme]);

  return <>{children}</>;
};
