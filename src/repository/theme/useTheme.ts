import { db } from "@config/firebase";
import { themeDoc } from "@repo/theme/themeDoc";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";

type ThemeActions = {
  onCreate: (type: string) => Promise<void>;
};

type Data = {
  theme: string;
};

export const useTheme = (): ThemeActions => {
  const { userId } = useRouter().query;

  const onCreate = async (type: string) => {
    const data: Data = { theme: type };
    await setDoc(doc(db, themeDoc(userId as string), "theme"), data);
  };

  return {
    onCreate,
  };
};
