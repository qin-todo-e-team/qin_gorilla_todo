import { toast } from "react-hot-toast";

type ToastType = {
  successToast: (message: string) => void;
  errorToast: (message: string) => void;
};

export const useToast = (): ToastType => {
  const successToast = (message: string) => {
    toast.success(message ?? "設定を変更しました", {
      duration: 1000,
      position: "bottom-center",
    });
  };
  const errorToast = (message: string) => {
    toast.error(message ?? "変更に失敗しました", {
      duration: 1000,
      position: "bottom-center",
    });
  };
  return {
    successToast,
    errorToast,
  };
};
