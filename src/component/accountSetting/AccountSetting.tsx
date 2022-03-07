import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { deleteCurrentUser, logout } from "../../../config/firebase";
import { SelectRow } from "./SelectRow";

type Types = {
  label: string;
  warning: string;
};

const accountSettings: Types[] = [
  {
    label: "ログアウト",
    warning: "ログアウトしてよろしいですか？",
  },
  {
    label: "アカウントの削除",
    warning: "アカウントを完全に削除してよろしいですか？",
  },
];

export const Account: React.VFC = () => {
  const [selectedItem, setSelectedItem] = useState<string>("");

  const onOpen = (label: string) => {
    setSelectedItem(label);
  };

  const onClose = () => {
    setSelectedItem("");
  };

  const logoutUser = () => {
    logout();
    setSelectedItem("");
  };

  const deleteUser = () => {
    deleteCurrentUser();
    setSelectedItem("");
  };

  return (
    <div className="my-8">
      <div className="px-5 w-full text-sm font-bold text-left text-gray-300">
        アカウントの操作
      </div>
      <ul className={"px-5 pt-2"}>
        {accountSettings.map(({ label, warning }) => (
          <div key={label}>
            <SelectRow onOpen={() => onOpen(label)}>{label}</SelectRow>

            <Modal onClose={onClose} isOpen={label === selectedItem} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader className="text-center">{label}</ModalHeader>
                <ModalBody>{warning}</ModalBody>
                <ModalFooter>
                  <div className="flex justify-center mb-2 space-x-2 w-full transition">
                    <button
                      className="w-[104px] h-[36px] text-xs font-bold text-black bg-gray-100 rounded-full"
                      onClick={onClose}
                    >
                      キャンセル
                    </button>
                    <button
                      className="w-[104px] h-[36px] text-xs font-bold text-white bg-red-500 rounded-full"
                      onClick={label === "ログアウト" ? logoutUser : deleteUser}
                    >
                      OK
                    </button>
                  </div>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        ))}
      </ul>
    </div>
  );
};
