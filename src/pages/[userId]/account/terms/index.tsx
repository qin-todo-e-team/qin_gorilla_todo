import { TypographyLayout } from "@component/Layout/typography";
import { Terms } from "@component/Terms";
import React from "react";

export const Index: React.VFC = () => (
  <TypographyLayout title={"利用規約"}>
    <Terms />
  </TypographyLayout>
);
