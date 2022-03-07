import { useRequireLogin } from "@hooks/useRequireLogin";
import type { CustomNextPage } from "next";
import { Index } from "src/pages/[userId]/todo";

const IndexPage: CustomNextPage = () => {
  useRequireLogin();
  return <Index />;
};

export default IndexPage;
