import { useColorMode } from "@chakra-ui/react";
import { SettingTitle } from "@component/SettingTitle";
import React from "react";

type Props = {
  children: React.ReactNode;
  title: string;
};

export const TypographyLayout: React.VFC<Props> = ({ children, title }) => {
  const { colorMode } = useColorMode();
  return (
    <div>
      <SettingTitle title={title} />
      {colorMode === "light" ? (
        <div className={"mx-auto prose"}>{children}</div>
      ) : (
        <div className={"mx-auto prose prose-invert"}>{children}</div>
      )}
    </div>
  );
};
