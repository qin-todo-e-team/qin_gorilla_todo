import { useProfile } from "@repo/profile/useProfile";
import Image from "next/image";
import React from "react";

export const Profile: React.VFC = () => {
  const {
    name,
    imageUrl,
    nameRequired,
    loading,
    imageRef,
    onChangeName,
    onChangeImage,
    onOpenFileDialog,
    onClickFileUpLoad,
  } = useProfile();

  return (
    <div className="px-6 mx-auto w-full max-w-screen-sm">
      <div className="mt-6">
        <label htmlFor="image" className="text-sm font-bold text-[#C2C6D2]">
          アイコン
        </label>
        <div className="flex items-center mt-2 space-x-6">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt="avatar"
              width={96}
              height={96}
              className="object-cover object-center w-24 h-24 rounded-full"
            />
          ) : (
            <div className="w-24 h-24 bg-[#C2C6D2] rounded-full" />
          )}
          <input
            ref={imageRef}
            type="file"
            id="image"
            onChange={onChangeImage}
            className="hidden"
            accept="image/*"
          />
          <button
            onClick={onOpenFileDialog}
            className="py-2.5 px-4 text-xs font-bold text-[#070417] bg-slate-100 rounded-full"
          >
            変更する
          </button>
        </div>
      </div>
      <div className="mt-6">
        <label htmlFor="name" className="text-sm font-bold text-[#C2C6D2]">
          名前
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onChangeName}
          className="block py-3.5 px-4 mt-2 w-full text-sm text-[#070417] bg-slate-100 rounded-2xl border-none"
        />
        {nameRequired && (
          <p className="mt-0.5 ml-4 text-sm text-red-500">入力必須です</p>
        )}
        {loading ? (
          <button className="p-4 mt-9 w-full text-xs font-bold text-white bg-blue-400 rounded-full">
            保存中
          </button>
        ) : (
          <button
            onClick={onClickFileUpLoad}
            className="p-4 mt-9 w-full text-xs font-bold text-white bg-blue-500 rounded-full"
          >
            保存する
          </button>
        )}
      </div>
    </div>
  );
};
