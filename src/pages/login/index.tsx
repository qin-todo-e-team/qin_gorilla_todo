import { Button, HStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { FaGoogle } from "react-icons/fa";

import { googleSignin } from "../../../config/firebase";

export const Login: NextPage = () => (
  <div className="p-4">
    <HStack>
      <Button
        colorScheme="facebook"
        leftIcon={<FaGoogle />}
        onClick={googleSignin}
      >
        Sign in with Google
      </Button>
    </HStack>
  </div>
);
