import { Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import { FaGoogle } from "react-icons/fa";

import { login } from "../../../config/firebase";

export const Login: NextPage = () => (
  <Button leftIcon={<FaGoogle />} onClick={() => login()}>
    Sign in with Google
  </Button>
);
