import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthContext } from "src/context/AuthContext";

export const useRequireLogin = () => {
  const router = useRouter();
  const { currentUser } = useAuthContext();

  useEffect(() => {
    currentUser ? router.push("/1/todo") : router.push("/login");
  }, [currentUser]);
};
