import { TypographyLayout } from "@component/Layout/typography";
import { Privacy } from "@component/Privacy";
import React from "react";

export const Index: React.VFC = () => (
  <TypographyLayout title={"プライバシーポリシー"}>
    <Privacy />
  </TypographyLayout>
);
