import type { useTheme as useNextTheme } from "next-themes";

export type ExtendUseThemeProps = ReturnType<typeof useNextTheme> & {
  theme: "os" | "light" | "dark";
  resolvedTheme: "light" | "dark";
};
