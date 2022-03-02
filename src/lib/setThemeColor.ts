import { useColorMode, useColorModePreference } from "@chakra-ui/react";

export const useSetThemeColor = (): {
  setThemeColor: (theme: string) => void;
} => {
  const { setColorMode } = useColorMode();
  const systemColorMode = useColorModePreference();

  const setThemeColor = (theme: string) => {
    theme === "os" ? setColorMode(systemColorMode) : setColorMode(theme);
  };

  return { setThemeColor };
};
