import { db } from "@config/firebase";
import { themeDoc } from "@repo/theme/themeDoc";
import type {
  DocumentData,
  FirestoreError,
  QuerySnapshot,
} from "firebase/firestore";
import { collection, doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useCollection } from "react-firebase-hooks/firestore";

type ThemeActions = {
  onCreate: (type: string) => Promise<void>;
};

type Data = {
  theme: string;
};

export const useGetThemeSetting = (): {
  value: QuerySnapshot<DocumentData> | undefined;
  loading: boolean;
  error: FirestoreError | undefined;
} => {
  const { userId } = useRouter().query;

  const [value, loading, error] = useCollection(
    collection(db, themeDoc(userId as string)),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return { value, loading, error };
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
