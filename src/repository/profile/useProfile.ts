import { db, storage } from "@config/firebase";
import { profileDoc, profileRef } from "@repo/profile/profileDoc";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useRouter } from "next/router";
import type React from "react";
import { useEffect, useRef, useState } from "react";

export const useProfile = () => {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<File | null | undefined>();
  const [imageUrl, setImageUrl] = useState<string>("");
  const [nameRequired, setNameRequired] = useState(false);
  const [loading, setLoding] = useState(false);
  const imageRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { userId } = router.query;

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

  const onClickOpenFileDialog = () => {
    imageRef.current?.click();
  };

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.item(0);
    const sizeLimit = 1024 * 1024 * 1;
    if (!file) {
      return;
    }

    if (sizeLimit < file.size) {
      alert("ファイルサイズは1MB以下にしてください");
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

      await setDoc(
        doc(db, profileDoc(userId as string), "profile"),
        { url: url },
        { merge: true }
      );
    }
    if (name) {
      await setDoc(
        doc(db, profileDoc(userId as string), "profile"),
        { name: name },
        { merge: true }
      );
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
    onClickOpenFileDialog,
    onClickFileUpLoad,
  };
};
