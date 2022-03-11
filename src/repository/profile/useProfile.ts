import { db, storage } from "@config/firebase";
import { profileDoc, profileRef } from "@repo/profile/profileDoc";
import { useToast } from "@repo/toast/useToast";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useRouter } from "next/router";
import type React from "react";
import { useEffect, useRef, useState } from "react";

type ProfileActions = {
  name: string;
  imageUrl: string;
  nameRequired: boolean;
  loading: boolean;
  imageRef: React.RefObject<HTMLInputElement>;
  onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onOpenFileDialog: () => void;
  onClickFileUpLoad: () => Promise<void>;
};

export const useProfile = (): ProfileActions => {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<File | null | undefined>();
  const [imageUrl, setImageUrl] = useState<string>("");
  const [nameRequired, setNameRequired] = useState(false);
  const [loading, setLoding] = useState(false);
  const imageRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { userId } = router.query;
  const { successToast, errorToast } = useToast();

  useEffect(() => {
    if (router.isReady) {
      (async () => {
        const docRef = doc(db, profileDoc(userId as string), "profile");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const { name, url } = docSnap.data();
          setImageUrl(url);
          setName(name);
        }
      })();
    }
  }, [router, userId]);

  const onOpenFileDialog = () => {
    imageRef.current?.click();
  };

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.item(0);
    const sizeLimit = 1024 * 1024 * 1;
    if (!file) {
      return;
    }

    if (sizeLimit < file.size) {
      errorToast("ファイルサイズは1MB以下にしてください");
      e.target.value = "";
      return;
    }

    const url = URL.createObjectURL(file);
    setImage(file);
    setImageUrl(url);
  };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onClickFileUpLoad = async () => {
    setLoding(true);
    if (image) {
      const storageRef = ref(storage, profileRef(userId as string));
      const snapshot = await uploadBytes(storageRef, image);
      const url = await getDownloadURL(snapshot.ref);

      try {
        await setDoc(
          doc(db, profileDoc(userId as string), "profile"),
          { url: url },
          { merge: true }
        );
        successToast("アイコンを変更しました");
      } catch (e) {
        errorToast("アイコンの変更に失敗しました");
      }
    }
    if (name) {
      try {
        await setDoc(
          doc(db, profileDoc(userId as string), "profile"),
          { name: name },
          { merge: true }
        );
        successToast("名前を変更しました");
      } catch (e) {
        errorToast("名前の変更に失敗しました");
      }
      setNameRequired(false);
    } else {
      setNameRequired(true);
    }
    setLoding(false);
  };

  return {
    name,
    imageUrl,
    nameRequired,
    loading,
    imageRef,
    onChangeName,
    onChangeImage,
    onOpenFileDialog,
    onClickFileUpLoad,
  };
};
