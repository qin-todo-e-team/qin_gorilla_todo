import { Button, HStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { FaGoogle } from "react-icons/fa";
import { useAuthContext } from "src/context/AuthContext";

import { login } from "../../../config/firebase";

export const Login: NextPage = () => {
  const { currentUser } = useAuthContext();

  return (
    <div className="p-4">
      {currentUser ? (
        <div>ログイン完了</div>
      ) : (
        <Button
          colorScheme="facebook"
          leftIcon={<FaGoogle />}
          onClick={() => login()}
        >
          Sign in with Google
        </Button>
      )}
    </div>
  );
};
