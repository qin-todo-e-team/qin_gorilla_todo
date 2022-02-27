import type { ExtendUseThemeProps } from "@config/themes";
import { useTheme as useNextTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";

export const useLayoutTheme = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { setTheme: handleTheme, theme: currentTheme } =
    useNextTheme() as ExtendUseThemeProps;
  const themes = useMemo(() => {
    return [
      { id: "system", label: "端末の設定に合わせる" },
      { id: "light", label: "ライト" },
      { id: "dark", label: "ダーク" },
    ] as const;
  }, []);
  useEffect(() => {
    return setIsMounted(true);
  }, []);

  return { themes, isMounted, currentTheme, handleTheme };
};
