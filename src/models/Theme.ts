const THEME = {
  OS: "os",
  LIGHT: "light",
  DARK: "dark",
} as const;

type TThemesTypes = {
  type: typeof THEME[keyof typeof THEME];
  label: string;
};

export const themes: TThemesTypes[] = [
  {
    type: "os",
    label: "OSの設定に合わせる",
  },
  {
    type: "light",
    label: "ライト",
  },
  {
    type: "dark",
    label: "ダーク",
  },
];
