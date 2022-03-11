import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthContext } from "src/context/AuthContext";

export const useRequireLogin = () => {
  const router = useRouter();
  const { currentUser } = useAuthContext();
  const uid = currentUser?.uid;

  useEffect(() => {
    currentUser ? router.push(`/${uid}/todo`) : router.push("/login");
  }, [currentUser]);
};
