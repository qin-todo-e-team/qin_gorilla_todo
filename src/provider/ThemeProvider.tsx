import { useSetThemeColor } from "@lib/setThemeColor";
import { useGetThemeSetting } from "@repo/theme/useTheme";
import React, { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider: React.VFC<Props> = ({ children }) => {
  // TODO userのパス登録されるようになったら、useContextからuserIdを取得し、そのパスでテーマを取得して変更するようにする
  const { setThemeColor } = useSetThemeColor();
  const { selectedTheme } = useGetThemeSetting();

  useEffect(() => {
    setThemeColor(selectedTheme);
  }, [selectedTheme]);

  return <>{children}</>;
};
