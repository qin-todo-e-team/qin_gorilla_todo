import { useRequireLogin } from "@hooks/useRequireLogin";
import type { CustomNextPage } from "next";
import { Login } from "src/pages/login";

const LoginPage: CustomNextPage = () => {
  useRequireLogin();
  return <Login />;
};

export default LoginPage;
